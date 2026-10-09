/**
 * Manual mock for react-native-safe-area-context.
 * Provides passthrough wrappers and zero insets so tests run
 * without a native bridge.
 */
const React = require('react');
const {View} = require('react-native');

const SafeAreaProvider = ({children}) => React.createElement(View, null, children);

const SafeAreaView = ({children, style}) =>
  React.createElement(View, {style}, children);

const useSafeAreaInsets = () => ({top: 0, right: 0, bottom: 0, left: 0});
const useSafeAreaFrame = () => ({x: 0, y: 0, width: 375, height: 812});

const initialWindowMetrics = {
  insets: {top: 0, right: 0, bottom: 0, left: 0},
  frame: {x: 0, y: 0, width: 375, height: 812},
};

module.exports = {
  __esModule: true,
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
  useSafeAreaFrame,
  initialWindowMetrics,
};
