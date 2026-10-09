/**
 * App.tsx — Root component
 *
 * Uses the standalone ThemeProvider from src/design-system.
 * Zero @ddsrn/* dependencies.
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/design-system/theme/ThemeProvider';
import {HelloWorldScreen} from './src/HelloWorldScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider brand="tesco" mode="light">
        <HelloWorldScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
