/**
 * ComponentShowcase
 *
 * The main screen of rn-expo-migration-showcase. Demonstrates all 5
 * standalone design-system components running on bare React Native,
 * Expo, and Expo Web — with zero @ddsrn/* dependencies.
 *
 * Components shown:
 *  - TopBar     (navigation bar, platform-aware title alignment)
 *  - Heading    (levels 1 + 2 with visualSize override)
 *  - BodyText   (md + sm sizes)
 *  - Button     (primary, interactive tap counter)
 *
 * PHASE 1+ — This file is never modified across any phase of the migration.
 * It is the proof that the standalone design system API is portable to
 * Expo and Expo Web without any screen-level changes.
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

export function ComponentShowcase(): React.JSX.Element {
  const [tapCount, setTapCount] = useState(0);

  const tapLabel =
    tapCount === 0
      ? 'Tap the button below to prove the component works.'
      : `Button tapped ${tapCount} ${tapCount === 1 ? 'time' : 'times'}. Confirmed working.`;

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Component Showcase" />
      <ScrollView contentContainerStyle={styles.content}>
        <Heading headingLevel="1">DDS Standalone Components</Heading>

        <BodyText size="md">
          These components are built from React Native primitives with zero
          external design-system dependencies. The same code runs on iOS,
          Android, and in the browser via Expo Web.
        </BodyText>

        <View style={styles.interactionSection}>
          <Heading headingLevel="2" visualSize="headline4">
            Interactive Button
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
