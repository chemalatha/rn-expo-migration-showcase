/**
 * Metro configuration — Phase 2 (Expo)
 *
 * CHANGED from Phase 1:
 *   getDefaultConfig from '@react-native/metro-config'
 *   →  getDefaultConfig from 'expo/metro-config'
 *
 * Port 4477, disableHierarchicalLookup and nodeModulesPaths are unchanged.
 * Screen and design-system source are untouched.
 */

const {getDefaultConfig} = require('expo/metro-config');

const projectRoot = __dirname;

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

config.server = {port: 4477};
config.resolver.nodeModulesPaths = [
  require('path').resolve(projectRoot, 'node_modules'),
];
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
