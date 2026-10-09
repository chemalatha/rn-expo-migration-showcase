/**
 * Babel configuration — Phase 2 (Expo)
 *
 * CHANGED from Phase 1:
 *   'module:@react-native/babel-preset'  ->  'babel-preset-expo'
 *
 * babel-preset-expo is a superset of @react-native/babel-preset and
 * adds Expo-specific transforms including web support.
 *
 * Note: Jest uses NODE_ENV=test so it picks up @react-native/babel-preset
 * via the env override, avoiding the Hermes parser conflict with Flow-typed
 * react-native internals.
 */
module.exports = function (api) {
  const isTest = api.env('test');
  api.cache.using(() => isTest);
  return {
    presets: [
      isTest ? 'module:@react-native/babel-preset' : 'babel-preset-expo',
    ],
  };
};
