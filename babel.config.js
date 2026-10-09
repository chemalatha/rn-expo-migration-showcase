/**
 * Babel configuration — Phase 2 (Expo)
 *
 * CHANGED from Phase 1:
 *   'module:@react-native/babel-preset'  →  'babel-preset-expo'
 *
 * babel-preset-expo is a superset of @react-native/babel-preset and
 * adds Expo-specific transforms including web support.
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
