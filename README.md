# LIO TECH Suite — Kurdish AI Assistant

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

LIO TECH Suite is a comprehensive web application featuring Kurdish language AI, mobile advice, movie recommendations, and AI image generation.

## ✨ Features

- **🤖 Kurdish AI Assistant** — Powered by Google Gemini, responds in Kurdish (Sorani)
- **📱 Mobile Advisor** — Get personalized recommendations and troubleshooting for smartphones
- **🎬 LIO Movies** — Discover movies with AI-powered recommendations (TMDB integration)
- **🎨 AI Image Creator** — Generate stunning images from text descriptions
- **🌍 Multilingual** — Kurdish (Sorani) & English support
- **🌙 Dark/Light Mode** — Beautiful theme switcher
- **📱 Fully Responsive** — Works perfectly on desktop, tablet, and mobile
- **🔐 Secure Backend** — All API keys protected server-side, never exposed to frontend

## 🛠 Tech Stack

**Frontend:**
- HTML5 / CSS3 / JavaScript (ES6+)
- Tailwind CSS
- Responsive Design
- Font Awesome Icons

**Backend:**
- Node.js + Express.js
- Google Gemini API (Text & Image Generation)
- TMDB API (Movie Database)
- CORS enabled for secure cross-origin requests
- Environment variables for secure key management

## 📋 Prerequisites

- **Node.js 18+** — [Download](https://nodejs.org/)
- **Google Gemini API Key** — Get from [ai.google.dev](https://ai.google.dev/)
- **TMDB API Key** — Get from [themoviedb.org](https://www.themoviedb.org/settings/api)

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/liotech99/LIO-TECH-AII.git
cd LIO-TECH-AII
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get Your API Keys

**Google Gemini API:**
1. Visit [ai.google.dev](https://ai.google.dev/)
2. Click "Get API Key"
3. Create a new project or use existing one
4. Copy your API key

**TMDB API:**
1. Visit [themoviedb.org](https://www.themoviedb.org/)
2. Sign in (or create account)
3. Go to Settings → API
4. Accept terms and request API key
5. Copy your "API Key (v3 auth)"

### 4. Create Environment File
```bash
cp .env.example .env
```

### 5. Add Your API Keys to `.env`
```bash
GOOGLE_API_KEY=your_google_gemini_api_key_here
TMDB_API_KEY=your_tmdb_api_key_here
PORT=3000
NODE_ENV=development
```

### 6. Start the Server
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### 7. Open in Browser
```
http://localhost:3000
```

## 🌐 API Endpoints

### Gemini AI Chat
```
POST /api/gemini

Request:
{
  "message": "سەلاو، چۆن هالیت؟",
  "model": "gemini-3-flash-preview"
}

Response:
{
  "success": true,
  "response": "AI response in Kurdish"
}
```

### AI Image Generation
```
POST /api/generate-image

Request:
{
  "prompt": "A futuristic smartphone in neon lights",
  "aspectRatio": "1:1",
  "style": "photorealistic"
}

Response:
{
  "success": true,
  "image": { base64 encoded image data }
}
```

### TMDB Movie Data
```
GET /api/tmdb/:endpoint?param=value

Examples:
/api/tmdb/movie/popular?page=1
/api/tmdb/search/movie?query=Inception&page=1
/api/tmdb/movie/550?append_to_response=videos
```

### Health Check
```
GET /api/health

Response:
{
  "status": "Server is running"
}
```

## 📁 Project Structure

```
LIO-TECH-AII/
├── server.js              # Express backend & API routes
├── package.json          # Node.js dependencies & scripts
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── README.md             # This file
└── public/
    ├── index.html        # Main web application
    └── api-config.js     # Frontend API client library
```

## 🔐 Security Best Practices

✅ **DO:**
- Store API keys in `.env` file (never commit)
- Use environment variables in production
- Keep `.gitignore` configured correctly
- Use backend proxy for all API calls
- Regenerate keys if accidentally exposed

❌ **DON'T:**
- Share API keys in comments or conversations
- Commit `.env` file to GitHub
- Call APIs directly from frontend
- Hardcode keys in JavaScript
- Push secrets to public repositories

## 🚀 Deployment

### Deploy to Render
1. Push code to GitHub
2. Go to [render.com](https://render.com/)
3. Create new "Web Service"
4. Connect your GitHub repository
5. Add environment variables:
   - `GOOGLE_API_KEY`
   - `TMDB_API_KEY`
   - `NODE_ENV=production`
6. Deploy!

### Deploy to Heroku
```bash
heroku login
heroku create your-app-name
heroku config:set GOOGLE_API_KEY=your_key TMDB_API_KEY=your_key
git push heroku main
heroku open
```

### Deploy to Railway
1. Connect GitHub repo to [railway.app](https://railway.app/)
2. Add environment variables in dashboard
3. Auto-deploy on push

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📚 API Key Resources

| Service | Link | Cost |
|---------|------|------|
| Google Gemini | [ai.google.dev](https://ai.google.dev/) | Free tier available |
| TMDB | [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) | Free |

## 🎯 Features in Detail

### Kurdish AI Assistant
- Ask questions in Kurdish or English
- Get responses in your selected language
- Chat history stored in browser
- Powered by Google Gemini 3 Flash

### Mobile Advisor
- Get smartphone recommendations by:
  - Gaming performance
  - Camera quality
  - Battery life
  - Processing power
  - Budget
  - Brand comparison (iPhone vs Android)
- Troubleshooting guides for common issues

### LIO Movies
- Browse popular, upcoming, and top-rated movies
- Search for specific movies
- Filter by genre
- Get AI recommendations based on preferences
- Watch trailers and read descriptions

### AI Image Creator
- Generate images from text descriptions
- Choose aspect ratios (square, landscape, portrait)
- Select visual styles:
  - Photorealistic
  - Cinematic
  - Anime & Manga
  - 3D Render
  - Digital Art
- Daily usage limits
- Gallery of generated images

## 🤝 Support

**Issues or Questions?**
- 📧 Create an issue on GitHub
- 💬 WhatsApp: +964 750 776 7066
- 🌐 Visit: [liotech.com](https://liotech.com)

## 👨‍💻 Author

**KHOSHAWII HASSO**
- GitHub: [@liotech99](https://github.com/liotech99)
- WhatsApp: +964 750 776 7066
- Year: 2026

## 📄 License

ISC License © 2026 KHOSHAWII HASSO

Permission to use, copy, modify, and distribute this software is granted provided that the above copyright notice and this permission notice appear in all copies.

---

**Made with ❤️ by KHOSHAWII HASSO**

*LIO TECH Suite — Your Kurdish AI Companion*
