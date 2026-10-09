/**
 * @format
 *
 * Tests for ComponentShowcase — standalone design system.
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {ThemeProvider} from '../src/design-system/theme/ThemeProvider';
import {ComponentShowcase} from '../src/ComponentShowcase';

function renderScreen() {
  return ReactTestRenderer.create(
    <ThemeProvider brand="tesco" mode="light">
      <ComponentShowcase />
    </ThemeProvider>,
  );
}

describe('ComponentShowcase', () => {
  it('renders without throwing', async () => {
    await expect(
      ReactTestRenderer.act(() => {
        renderScreen();
      }),
    ).resolves.not.toThrow();
  });

  it('renders the main heading', async () => {
    let renderer!: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      renderer = renderScreen();
    });
    expect(JSON.stringify(renderer.toJSON())).toContain('DDS Standalone Components');
  });

  it('renders the initial tap prompt', async () => {
    let renderer!: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      renderer = renderScreen();
    });
    expect(JSON.stringify(renderer.toJSON())).toContain('Tap the button below');
  });

  it('renders the migration phases section', async () => {
    let renderer!: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      renderer = renderScreen();
    });
    const json = JSON.stringify(renderer.toJSON());
    expect(json).toContain('Phase 1');
    expect(json).toContain('Phase 2');
  });

  it('increments tap count when button is pressed', async () => {
    let renderer!: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(() => {
      renderer = renderScreen();
    });

    const button = renderer.root.findAll(
      node => node.props.accessibilityRole === 'button',
    )[0];

    await ReactTestRenderer.act(() => {
      button.props.onPress?.({} as any);
    });

    expect(JSON.stringify(renderer.toJSON())).toContain('tapped 1 time.');
  });
});
