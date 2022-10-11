import { defineConfig } from 'cypress';

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    env: {
        TAGS: '@smoke'
    },
    video: false,
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents,
        baseUrl: 'https://google.com',
        specPattern: 'cypress/e2e/**/*.{js,ts}',
        experimentalSessionAndOrigin: true,
    },
});
