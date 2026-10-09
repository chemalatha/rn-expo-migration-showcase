/**
 * App.tsx — Root component
 *
 * Uses the standalone ThemeProvider from src/design-system.
 * Zero @ddsrn/* dependencies.
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from './src/design-system/theme/ThemeProvider';
import {ComponentShowcase} from './src/ComponentShowcase';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider brand="tesco" mode="light">
        <ComponentShowcase />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
