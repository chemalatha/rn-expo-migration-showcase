const path = require('path');

const localNodeModules = path.resolve(__dirname, 'node_modules');

module.exports = {
  preset: 'react-native',
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/__tests__/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/packages/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Force all code to use our local react-native copy
    '^react-native$': `${localNodeModules}/react-native`,
    '^react$': `${localNodeModules}/react`,
    '^react-test-renderer(.*)$': `${localNodeModules}/react-test-renderer$1`,
    // Mock safe-area-context (needs native bridge)
    '^react-native-safe-area-context$': '<rootDir>/__mocks__/react-native-safe-area-context.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
  ],
};
