import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';
import { VitePWA }      from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      // 'prompt' → we show our own custom "update ready" banner
      registerType: 'prompt',

      includeAssets: ['favicon.ico', 'icons/*.png'],

      // ── Web App Manifest ────────────────────────────────────
      manifest: {
        name:             'Japanese Vocabulary',
        short_name:       'JP Vocab',
        description:      'Learn Japanese vocabulary with audio, flashcards and quizzes',
        theme_color:      '#b5341a',
        background_color: '#fef3e2',
        display:          'standalone',
        orientation:      'portrait',
        start_url:        '/',
        icons: [
          {
            src:   'icons/icon-192.png',
            sizes: '192x192',
            type:  'image/png',
          },
          {
            src:   'icons/icon-512.png',
            sizes: '512x512',
            type:  'image/png',
          },
          {
            src:     'icons/icon-512.png',
            sizes:   '512x512',
            type:    'image/png',
            purpose: 'any maskable',
          },
        ],
      },

      // ── Workbox (service worker) config ─────────────────────
      workbox: {
        // Cache all app shell files
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],

        // Cache Wikipedia images (flashcard photos) for 30 days
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/en\.wikipedia\.org\/.*/i,
            handler:    'CacheFirst',
            options: {
              cacheName: 'wikipedia-cache',
              expiration: {
                maxEntries:    150,
                maxAgeSeconds: 60 * 60 * 24 * 30,  // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/upload\.wikimedia\.org\/.*/i,
            handler:    'CacheFirst',
            options: {
              cacheName: 'wikimedia-images',
              expiration: {
                maxEntries:    150,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],

  // ── Inject build-time constants ─────────────────────────────
  define: {
    // Read version from package.json at build time
    __APP_VERSION__: JSON.stringify(
      process.env.npm_package_version || '1.0.0'
    ),
    // GitHub repo in "owner/repo" format — set via CI env var
    __GITHUB_REPO__: JSON.stringify(
      process.env.VITE_GITHUB_REPO || ''
    ),
  },
});
