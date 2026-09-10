# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in LIO TECH Suite, please **do not** open a public GitHub issue. Instead, contact the maintainer directly:

📧 **Email:** (contact via GitHub profile)  
💬 **WhatsApp:** +964 750 776 7066  
👤 **Author:** KHOSHAWII HASSO

Please provide:
- A description of the vulnerability
- Steps to reproduce it
- Potential impact
- Any suggested fixes

We will acknowledge your report within 48 hours and work on a fix promptly.

## Security Best Practices

### For Developers

1. **Never commit `.env` files** — only commit `.env.example` with placeholder values
2. **Regenerate API keys immediately** if they are exposed
3. **Use environment variables** for all sensitive data (API keys, tokens, secrets)
4. **Enable `.env` in `.gitignore`** before committing
5. **Validate all user inputs** — don't trust frontend data
6. **Use HTTPS in production** — never use unencrypted connections
7. **Implement rate limiting** to prevent API abuse
8. **Keep dependencies updated** — run `npm audit` regularly

### For Deployment

```bash
# Check for vulnerable dependencies
npm audit

# Update to latest secure versions
npm audit fix

# Review critical vulnerabilities
npm audit --audit-level=moderate
```

### For API Configuration

1. **Google Gemini API:**
   - Rotate keys every 90 days
   - Monitor API usage in [Google Cloud Console](https://console.cloud.google.com)
   - Set spending limits if available
   - Review and restrict key permissions

2. **TMDB API:**
   - Keep your API key private
   - Regenerate if compromised
   - Monitor usage at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

## Environment Variables

Create a `.env` file (do not commit):

```bash
GOOGLE_API_KEY=your_actual_key_here
TMDB_API_KEY=your_actual_key_here
PORT=3000
NODE_ENV=production
```

## Security Features Implemented

✅ **Input Validation** — All user inputs are sanitized and length-limited  
✅ **Rate Limiting** — IP-based rate limiting (30 requests/min per IP)  
✅ **Error Handling** — Sensitive details not exposed to clients  
✅ **Payload Limits** — JSON requests limited to 1MB  
✅ **Request Timeouts** — API calls have timeout protection  
✅ **API Endpoint Whitelist** — TMDB endpoint validation  
✅ **CORS Enabled** — Cross-origin requests properly configured  

## Changelog

### Version 1.0.1 (Security Release)
- 🔒 Removed exposed API keys from repository
- ✅ Added input validation on all API endpoints
- ✅ Implemented rate limiting (30 req/min per IP)
- ✅ Added request timeout protection
- ✅ Restricted TMDB endpoint access
- ✅ Improved error handling (no sensitive info leakage)
- ✅ Added `.env` file size limits (1MB JSON payload)
- ✅ Created SECURITY.md policy document

## License

ISC License © 2026 KHOSHAWII HASSO
