const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },

  /**
   * Extend Vite config
   *
   * from https://gitmemory.cn/repo/eirslett/storybook-builder-vite/issues/186
   *
   * @param {import('vite').UserConfig} config
   * @param {'DEVELOPMENT'|'PRODUCTION'} [configType]
   * @returns {Promise<*>}
   */
  viteFinal: async (config, { configType }) => {
    // Needed only for development mode: `npm run storybook`
    config.optimizeDeps =
      configType === 'PRODUCTION'
        ? config.optimizeDeps
        : {
            ...(config.optimizeDeps || {}),
            include: [
              ...(config?.optimizeDeps?.include || []),
              // Fix: `@storybook/addon-interactions` exports is not defined or `jest-mock` does not provide an export named 'fn'
              'jest-mock',
              // Optional, but prevents error flashing in the Storybook component preview iframe:
              // Fix: failed to fetch dynamically import module, avoid cache miss for dependencies on the first load
              '@storybook/components',
              '@storybook/store',
              // Add all addons that imported in the `preview.js` or `preview.ts` file and used in exported constants
              '@storybook/addon-links',
              '@storybook/theming',
            ],
          }
    // ...
    config.define =
      configType === 'PRODUCTION'
        ? config.define
        : {
            ...config.define,
            // needed to fix jest error in storybook/addon-interactions
            global: 'window',
          }

    return config
  },
}
