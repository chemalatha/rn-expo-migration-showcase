/**
 * HelloWorldScreen
 *
 * Demonstrates the standalone design-system components.
 * All imports now come from ./design-system — zero @ddsrn/* dependencies.
 *
 * API is identical to the DDS version, so migrating back to the real
 * library is a one-line import path change per component.
 *
 * PHASE 1 — Bare React Native (standalone design system)
 */

import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Heading} from './design-system/Heading';
import {BodyText} from './design-system/BodyText';
import {Button} from './design-system/Button';
import {TopBar} from './design-system/TopBar';
import {tokens} from './design-system/theme/tokens';

const {spacing} = tokens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  interactionSection: {
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  phaseSection: {
    gap: spacing.sm,
    marginTop: spacing.md,
  },
});

export function HelloWorldScreen(): React.JSX.Element {
  const [tapCount, setTapCount] = useState(0);

  const tapLabel =
    tapCount === 0
      ? 'Tap the button below to prove the component works.'
      : `Button tapped ${tapCount} ${tapCount === 1 ? 'time' : 'times'}. Confirmed working.`;

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="DDS React Native" />
      <ScrollView contentContainerStyle={styles.content}>
        <Heading headingLevel="1">Hello, World!</Heading>

        <BodyText size="md">
          This screen uses a standalone design-system (no @ddsrn/* packages).
          Components are implemented locally with the same API as DDS React
          Native — migration back is a path-only import change.
        </BodyText>

        <View style={styles.interactionSection}>
          <Heading headingLevel="2" visualSize="headline4">
            Interactivity
          </Heading>

          <BodyText size="md">{tapLabel}</BodyText>

          <Button onPress={() => setTapCount(c => c + 1)}>Tap me</Button>
        </View>

        <View style={styles.phaseSection}>
          <Heading headingLevel="2" visualSize="headline4">
            Migration phases
          </Heading>

          <BodyText size="sm">Phase 1 - Standalone bare React Native (you are here)</BodyText>
          <BodyText size="sm">Phase 2 - Expo SDK (config change only)</BodyText>
          <BodyText size="sm">Phase 3 - Expo Web (runs in browser)</BodyText>
          <BodyText size="sm">Phase 4 - Automated screenshot capture</BodyText>
          <BodyText size="sm">Phase 5 - Astro docs site with screenshots</BodyText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
