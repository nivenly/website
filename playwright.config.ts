import {defineConfig, devices, ViewportSize} from '@playwright/test';

/**
 * Preferred desktop viewport size.
 *
 * Playwright default is 1280x720, slightly higher makes more sense.
 */
const desktopViewport: ViewportSize = {
    "width": 1280,
    "height": 1024,
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 2 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://localhost:1313',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
    },

    // Configure projects for different browsers and devices.
    projects: [
        {name: 'chromium', use: {...devices['Desktop Chrome'], "viewport": desktopViewport}},
        // { name: 'firefox', use: { ...devices['Desktop Firefox'], "viewport" : desktopViewport}},
        // { name: 'webkit', use: { ...devices['Desktop Safari'], "viewport" : desktopViewport}},
        {name: "android", use: {...devices['Pixel 5']}},
        // { name: "ios", use: { ...devices['iPhone 12'] } },
    ],

    // How to run the dev server before starting the tests.
    webServer: {
        command: 'make dev',
        url: 'http://localhost:1313',
        reuseExistingServer: !process.env.CI,
    },

    // Path to save screenshots to, relative to this file.
    snapshotPathTemplate: 'screenshots/{testFilePath}/{arg}-{projectName}-{platform}{ext}'
});
