import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../../../src/app/(app)/page';

test('Page', async () => {
  render(await Page());
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Kickstart Your SaaS App Idea with Ease 🚀',
    })
  ).toBeDefined();
});
