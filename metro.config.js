/**
 * Metro configuration — Phase 1 (Bare React Native)
 * This file changes in Phase 2 to extend @expo/metro-config.
 *
 * PHASE 1 — Fully self-contained, no monorepo references.
 */

const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const projectRoot = __dirname;

/** @type {import('@react-native/metro-config').MetroConfig} */
const config = {
  server: {
    port: 4477,
  },
  resolver: {
    nodeModulesPaths: [require('path').resolve(__dirname, 'node_modules')],
    disableHierarchicalLookup: true,
    blockList: [
      /\.git\/.*/,
      /\.idea\/.*/,
      /\.vscode\/.*/,
      /android\/build\/.*/,
      /android\/app\/build\/.*/,
      /android\/\.gradle\/.*/,
      /ios\/build\/.*/,
      /ios\/Pods\/.*/,
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);
