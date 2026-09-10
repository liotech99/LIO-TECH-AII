/**
 * ============================================================================
 * LIO TECH SUITE - Frontend API Configuration
 * ============================================================================
 * This file handles all communication with the backend API.
 * All API keys are stored securely on the server, not in frontend code.
 */

// Detect environment
const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3000'
  : window.location.origin; // Use same domain in production

console.log('🔗 API Base URL:', API_BASE_URL);

/**
 * Call Gemini AI API through secure backend
 * @param {string} message - User message
 * @param {string} model - Gemini model name
 * @returns {Promise<string>} AI response
 */
async function callGeminiAPI(message, model = 'gemini-3-flash-preview') {
  try {
    const response = await fetch(`${API_BASE_URL}/api/gemini`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        model: model
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.response || 'No response received';
  } catch (error) {
    console.error('❌ Error calling Gemini API:', error.message);
    return 'عێ، بووره! لە کاتی وەڵام داگرتندا کێشەیەک هەبوو. تکایە دوبارە هەولێ بدەرەوە.';
  }
}

/**
 * Generate images using Gemini API through backend
 * @param {string} prompt - Image description
 * @param {string} aspectRatio - Image ratio (1:1, 16:9, 9:16, 4:3)
 * @param {string} style - Visual style (photorealistic, cinematic, anime, 3d render, digital art)
 * @returns {Promise<Object|null>} Image data or null
 */
async function generateImageAPI(prompt, aspectRatio = '1:1', style = 'photorealistic') {
  try {
    const response = await fetch(`${API_BASE_URL}/api/generate-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt,
        aspectRatio: aspectRatio,
        style: style
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.image || null;
  } catch (error) {
    console.error('❌ Error generating image:', error.message);
    return null;
  }
}

/**
 * Fetch TMDB movie data through backend
 * @param {string} endpoint - TMDB endpoint (e.g., 'movie/popular')
 * @param {Object} params - Query parameters
 * @returns {Promise<Object|null>} TMDB data or null
 */
async function fetchTMDB(endpoint, params = {}) {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/api/tmdb/${endpoint}${queryString ? '?' + queryString : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Error fetching TMDB data:', error.message);
    return null;
  }
}

/**
 * Health check - verify backend is running
 * @returns {Promise<boolean>}
 */
async function healthCheck() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.ok;
  } catch (error) {
    console.error('❌ Backend is not responding:', error.message);
    return false;
  }
}

// Check backend on page load
window.addEventListener('DOMContentLoaded', async () => {
  const isHealthy = await healthCheck();
  if (!isHealthy && window.location.hostname !== 'localhost') {
    console.warn('⚠️ Backend server may be offline. Some features may not work.');
  }
});
