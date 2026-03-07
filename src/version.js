/**
 * version.js
 * Single source of truth for the running app version.
 * __APP_VERSION__ and __GITHUB_REPO__ are injected at
 * build time by vite.config.js → define: {}
 */

// eslint-disable-next-line no-undef
export const APP_VERSION  = typeof __APP_VERSION__  !== 'undefined' ? __APP_VERSION__  : '1.0.0';

// eslint-disable-next-line no-undef
export const GITHUB_REPO  = typeof __GITHUB_REPO__  !== 'undefined' ? __GITHUB_REPO__  : '';
