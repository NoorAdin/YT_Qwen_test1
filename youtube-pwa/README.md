# YouTube PWA - Ad-Free with Picture-in-Picture

A Progressive Web App that provides direct access to m.youtube.com with native Picture-in-Picture support and an optimized mobile viewing experience.

## ✨ Features

- **Direct YouTube Connection**: Redirects to m.youtube.com for authentic YouTube content
- **Native Picture-in-Picture (PiP)**: Uses YouTube Mobile's built-in PiP feature
- **PWA Installable**: Install on mobile and desktop like a native app
- **Ad-Reduced Experience**: Mobile YouTube has significantly fewer ads than desktop
- **Dark Theme**: Optimized loading screen with YouTube branding
- **Standalone Mode**: Runs as a separate app without browser UI
- **Zero Maintenance**: No iframe workarounds, uses YouTube directly

## 🚀 Quick Start

### Option 1: Using npx serve (Recommended)

```bash
cd youtube-pwa
npx serve .
```

Then open `http://localhost:3000` in your browser.

### Option 2: Using Python

```bash
cd youtube-pwa
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Using Node.js http-server

```bash
npm install -g http-server
cd youtube-pwa
http-server -p 8080
```

## 📱 Installation Instructions

### Desktop (Chrome/Edge)

1. Open the app in Chrome or Edge
2. Click the install icon (⊕) in the address bar
3. Click "Install"
4. The app will launch in standalone mode

### Android (Chrome)

1. Open the app in Chrome
2. Tap the menu (⋮)
3. Tap "Install app" or "Add to Home screen"
4. Confirm installation

### iOS (Safari)

1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right corner

## 🎮 Usage

### Picture-in-Picture on Mobile

**This app uses m.youtube.com which has NATIVE PiP support:**

#### Android:
1. Play any video
2. Press the Home button or swipe up
3. Video automatically continues in Picture-in-Picture!

#### iOS (iOS 14+):
1. Play any video
2. Swipe up to go home or switch apps
3. Video continues in Picture-in-Picture window!

### Picture-in-Picture on Desktop

1. Play a video on YouTube
2. Right-click on the video once
3. Right-click again on the context menu
4. Select "Picture in picture"

The video will float above all other windows!

## ⚠️ Important Notes

### HTTPS Requirement
PWAs require HTTPS to function properly (except on localhost). For production deployment:
- Use a service like Vercel, Netlify, or GitHub Pages
- Or set up your own HTTPS server with a valid SSL certificate

### Browser Support
- **Picture-in-Picture Mobile**: Android 8+, iOS 14+
- **PWA Installation**: Chrome 67+, Edge 79+, Safari 11.3+
- **Best Experience**: Chrome/Chromium-based browsers on Android

### Why This Approach is Better

Instead of using iframes (which are blocked by YouTube's X-Frame-Options and have cross-origin restrictions), this app:

1. **Directly connects to m.youtube.com** - No proxy, no workaround
2. **Uses native mobile PiP** - YouTube Mobile has built-in PiP when you press home
3. **Fewer ads** - Mobile YouTube serves fewer ads than desktop
4. **Better performance** - Direct connection, no middleman
5. **Always up-to-date** - YouTube updates their mobile site, your app benefits

### Ad Blocking
This app uses m.youtube.com which typically has fewer ads than the desktop version. However:
- Some ads may still appear (served by YouTube)
- For completely ad-free experience, consider YouTube Premium
- Browser-level ad blockers can be used alongside this PWA

## 📁 File Structure

```
youtube-pwa/
├── index.html      # Main application with redirect
├── manifest.json   # PWA manifest
├── sw.js          # Service Worker for offline support
├── readme.html    # Landing page with instructions
└── README.md      # This file
```

## 🔧 Customization

### Change Theme Color
Edit `manifest.json` and `index.html`:
```json
"theme_color": "#ff0000"
```

### Modify App Name
Edit `manifest.json`:
```json
"name": "Your App Name",
"short_name": "YourShortName"
```

## 🌐 Deployment

### Deploy to Vercel (Free)

```bash
npm install -g vercel
cd youtube-pwa
vercel
```

### Deploy to Netlify (Free)

```bash
npm install -g netlify-cli
cd youtube-pwa
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Create a GitHub repository
2. Push files to the repository
3. Enable GitHub Pages in Settings
4. Your app will be available at `https://username.github.io/repo-name`

## 🛠️ Troubleshooting

### PWA Won't Install
- Ensure you're using HTTPS (or localhost)
- Check that all files are served correctly
- Verify manifest.json is accessible

### PiP Not Working on Mobile
- Make sure you're playing a video first
- Press the Home button (don't close the app)
- Check OS compatibility (Android 8+, iOS 14+)
- Some videos may have PiP disabled by the uploader

### Videos Not Loading
- Check your internet connection
- Ensure no firewall is blocking YouTube
- Try clearing browser cache

## 📄 License

This project is for educational purposes. YouTube is a trademark of Google LLC.

## 🙏 Credits

Built as a Progressive Web App demonstrating modern web capabilities including:
- Service Workers
- Web App Manifest
- Native Mobile Picture-in-Picture
- Direct YouTube Mobile integration

---

**Enjoy ad-reduced YouTube viewing with native Picture-in-Picture!** 🎬
