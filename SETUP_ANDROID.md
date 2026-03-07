# 🤖 Android + PWA Setup Guide
## Japanese Vocabulary App — Complete Step-by-Step

---

## Overview

```
Your Push to GitHub
       │
       ├──▶ Vercel           → Web app live at your-app.vercel.app
       └──▶ GitHub Actions   → Builds APK → GitHub Releases
                                     │
                              Android users get
                              in-app update notification
```

---

## PART 1 — One-Time Local Setup (VS Code Terminal)

### Step 1 — Install Java JDK 17
1. Go to: https://adoptium.net
2. Download **Temurin 17 LTS** → Windows x64 `.msi`
3. Run the installer (keep all defaults — make sure "Set JAVA_HOME" is checked)
4. Verify in VS Code terminal:
   ```
   java -version
   ```
   Should show: `openjdk version "17.x.x"`

---

### Step 2 — Install new npm dependencies
In your project folder in VS Code terminal:
```bash
npm install
```
This installs Capacitor, vite-plugin-pwa, and everything else from package.json.

---

### Step 3 — Generate the Android project (ONE TIME ONLY)
```bash
npm run build
npx cap add android
```
This creates an `android/` folder in your project. This only needs to be done once.

> ✅ You do NOT need Android Studio for this step.

---

### Step 4 — Generate your signing keystore (ONE TIME ONLY)
A keystore is like a digital signature for your APK. Run in VS Code terminal:

```bash
keytool -genkey -v \
  -keystore my-release-key.jks \
  -keyalg RSA -keysize 2048 \
  -validity 10000 \
  -alias my-key-alias
```

It will ask for:
- **Keystore password** → choose a strong password, save it
- **Key password** → can be same as above
- **Your name, organisation, city, country** → fill in or press Enter to skip

> ⚠️ IMPORTANT: Back up `my-release-key.jks` somewhere safe.
> If you lose it, you cannot publish updates to the same app.

---

### Step 5 — Convert keystore to base64 (for GitHub Secrets)

In VS Code terminal (PowerShell):
```powershell
[Convert]::ToBase64String(
  [IO.File]::ReadAllBytes("my-release-key.jks")
) | Set-Clipboard
```
This copies the base64 string to your clipboard.

> Paste and save it in a text file temporarily — you'll need it in Step 7.

---

### Step 6 — Push everything to GitHub

```bash
git add .
git commit -m "Add Android + PWA support"
git push
```

> The `android/` folder MUST be committed. This is normal for Capacitor projects.

---

### Step 7 — Add GitHub Secrets
1. Go to your GitHub repository
2. Click **Settings → Secrets and variables → Actions**
3. Click **New repository secret** for each of these:

| Secret Name       | Value                                      |
|-------------------|--------------------------------------------|
| `KEYSTORE_BASE64` | The base64 string you copied in Step 5     |
| `KEY_ALIAS`       | `my-key-alias`                             |
| `KEY_PASSWORD`    | The key password you chose in Step 4       |
| `STORE_PASSWORD`  | The keystore password you chose in Step 4  |

---

### Step 8 — Add VITE_GITHUB_REPO to Vercel
So the update checker knows which repo to poll:
1. Go to your Vercel project → **Settings → Environment Variables**
2. Add: `VITE_GITHUB_REPO` = `your-github-username/japanese-vocab`
3. Click **Save** and redeploy

---

## PART 2 — GitHub Actions Build

After your first push (Step 6), go to:
**GitHub → your repo → Actions tab**

You'll see the workflow running. It takes about **5–8 minutes** to:
- Build the web app ✓
- Compile the Android APK ✓
- Sign it ✓
- Post it as a GitHub Release ✓

Once done, go to **Releases** on your repo page — you'll see a `.apk` file ready to download!

---

## PART 3 — Deploying to Vercel

1. Go to **vercel.com** → New Project → Import your GitHub repo
2. Framework: **Vite** (auto-detected)
3. Click Deploy
4. Done! Your web app is live.

Every `git push` to main auto-deploys to Vercel AND builds a new APK.

---

## PART 4 — Installing the APK on Android

1. On your Android phone, open **Chrome** → go to your GitHub repo → Releases
2. Download the `.apk` file
3. Android will ask to allow installing from unknown sources → Allow
4. Tap the downloaded file to install

### OR — Share via QR Code
Create a QR code from https://qrcode.monkey.com pointing to:
```
https://github.com/YOUR_USERNAME/japanese-vocab/releases/latest
```
Anyone scans the QR → downloads and installs!

---

## PART 5 — Installing as PWA (Web)

Users on any browser (phone or desktop):
1. Open your Vercel URL in **Chrome** or **Edge**
2. Tap the **"Add to Home Screen"** / **"Install App"** prompt
3. The app appears on their home screen like a native app
4. Updates happen **silently and automatically** — no action needed

---

## PART 6 — Publishing Future Updates

### To update content (new lessons, bug fixes):
```bash
# 1. Make your changes
# 2. Bump version in package.json:  "version": "1.0.0"  →  "1.1.0"
# 3. Push:
git add .
git commit -m "Add lesson 3 - Greetings"
git push
```

That's it! Automatically:
- ✅ Vercel deploys the new web version
- ✅ GitHub Actions builds new APK
- ✅ New GitHub Release created (v1.1.0)
- ✅ Android users see "Update 1.1.0 available!" banner in the app
- ✅ PWA users see "App updated! Reload" banner

### Version numbering guide:
| Change | Example |
|--------|---------|
| New lesson added | 1.0.0 → 1.1.0 |
| Bug fix | 1.1.0 → 1.1.1 |
| Major redesign | 1.1.1 → 2.0.0 |

---

## Summary: Folder Structure

```
japanese-vocab/
├── .github/
│   └── workflows/
│       └── build.yml          ← Auto-builds APK on every push
├── android/                   ← Generated by Capacitor (commit this!)
├── public/
│   ├── favicon.ico
│   └── icons/
│       ├── icon-192.png       ← PWA icon
│       └── icon-512.png       ← PWA icon (also used for Android)
├── src/
│   ├── components/
│   │   ├── UpdateChecker.jsx  ← In-app update notifications
│   │   └── ...
│   ├── version.js             ← App version (auto-set at build time)
│   └── App.jsx                ← Integrates PWA SW hook
├── capacitor.config.json      ← Android app settings
├── package.json               ← Version number lives here
└── vite.config.js             ← PWA plugin config
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `keytool` not found | Java not installed or not in PATH — restart VS Code after installing Java |
| `npx cap add android` fails | Run `npm install` first |
| APK build fails in Actions | Check all 4 GitHub Secrets are set correctly |
| Update checker not working | Set `VITE_GITHUB_REPO` in Vercel env vars |
| PWA not installable | Must be served over HTTPS (Vercel does this automatically) |
