import { defineConfig, devices } from '@playwright/test'

/** Hits the PowerShell launcher on port 5173, not the Vite preview. */
export default defineConfig({
  testDir: 'e2e',
  testMatch: 'launcher-audio.spec.ts',
  timeout: 180000,
  expect: { timeout: 20000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:5173',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: false,
        launchOptions: {
          firefoxUserPrefs: {
            'media.autoplay.default': 0,
            'media.autoplay.blocking_policy': 0,
            'media.volume_scale': '1.0',
          },
        },
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
        launchOptions: {
          args: [
            '--autoplay-policy=no-user-gesture-required',
            '--use-gl=angle',
            '--use-angle=swiftshader',
            '--enable-webgl',
            '--ignore-gpu-blocklist',
          ],
        },
      },
    },
  ],
  webServer: {
    command: 'pwsh -NoProfile -File start-game.ps1',
    env: { SKT_NO_BROWSER: '1' },
    url: 'http://127.0.0.1:5173/',
    reuseExistingServer: false,
    timeout: 30000,
  },
})
