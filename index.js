/**
 * @format
 *
 * PHASE 1 — Bare React Native entry point
 * Uses AppRegistry directly (standard bare RN pattern).
 * This file changes in Phase 2 to use Expo's registerRootComponent.
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
