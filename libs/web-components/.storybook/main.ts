import type { StorybookConfig } from '@storybook/web-components-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../../assets'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  webpackFinal(config, options) {
    config.module = config.module || { rules: [] };

    // Remove the existing ts-loader rule
    config.module.rules = config.module.rules?.filter((rule) => {
      if (typeof rule === 'object' && rule && 'test' in rule) {
        return !(rule.test instanceof RegExp && rule.test.test('.ts'));
      }
      return true;
    });

    // Use ts-loader for .ts files (handles Lit decorators)
    config.module.rules?.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
              target: 'es2015',
            },
          },
        },
      ],
    });

    // Use babel-loader for .tsx files (handles React JSX)
    config.module.rules?.push({
      test: /\.tsx$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
          },
        },
      ],
    });

    config.resolve?.extensions?.push('.ts', '.tsx', '.jsx');

    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    return config;
  },
};

export default config;
