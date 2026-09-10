const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (your HTML/CSS/JS)
app.use(express.static('public'));

// ============================================================================
// GOOGLE GEMINI API ENDPOINT
// ============================================================================
app.post('/api/gemini', async (req, res) => {
  try {
    const { message, model = 'gemini-3-flash-preview' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          key: apiKey
        }
      }
    );

    const textContent = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    res.json({
      success: true,
      response: textContent
    });
  } catch (error) {
    console.error('Gemini API Error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to get response from Gemini API',
      details: error.response?.data || error.message
    });
  }
});

// ============================================================================
// GEMINI IMAGE GENERATION ENDPOINT
// ============================================================================
app.post('/api/generate-image', async (req, res) => {
  try {
    const { prompt, aspectRatio = '1:1', style = 'photorealistic' } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const enhancedPrompt = `${prompt}. Style: ${style}. Aspect ratio: ${aspectRatio}. High quality, detailed, professional.`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent`,
      {
        contents: [
          {
            parts: [
              {
                text: enhancedPrompt
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          key: apiKey
        }
      }
    );

    const imageData = response.data.candidates?.[0]?.content?.parts?.[0]?.inlineData;

    res.json({
      success: true,
      image: imageData
    });
  } catch (error) {
    console.error('Image Generation Error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to generate image',
      details: error.response?.data || error.message
    });
  }
});

// ============================================================================
// TMDB MOVIES API ENDPOINT (Proxy)
// ============================================================================
app.get('/api/tmdb/:endpoint', async (req, res) => {
  try {
    const { endpoint } = req.params;
    const tmdbKey = process.env.TMDB_API_KEY;

    if (!tmdbKey) {
      return res.status(500).json({ error: 'TMDB API key not configured' });
    }

    const query = new URLSearchParams(req.query);
    query.set('api_key', tmdbKey);

    const response = await axios.get(
      `https://api.themoviedb.org/3/${endpoint}?${query.toString()}`
    );

    res.json(response.data);
  } catch (error) {
    console.error('TMDB API Error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to fetch from TMDB',
      details: error.response?.data || error.message
    });
  }
});

// ============================================================================
// HEALTH CHECK
// ============================================================================
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ LIO TECH Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints ready:`);
  console.log(`   - POST /api/gemini (Kurdish AI)`);
  console.log(`   - POST /api/generate-image (AI Image Generator)`);
  console.log(`   - GET  /api/tmdb/:endpoint (Movies)`);
});
