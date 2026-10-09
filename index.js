/**
 * Entry point — Phase 2 (Expo)
 *
 * CHANGED from Phase 1:
 *   AppRegistry.registerComponent(appName, () => App)
 *   →  registerRootComponent(App)
 *
 * registerRootComponent calls AppRegistry internally and also handles
 * Expo-specific initialisation. No other changes to the app.
 */

import {registerRootComponent} from 'expo';
import App from './App';

registerRootComponent(App);
