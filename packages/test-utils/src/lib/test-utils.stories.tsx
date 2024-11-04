import type { Meta, StoryObj } from '@storybook/react';
import { TestUtils } from './test-utils';

const meta: Meta<typeof TestUtils> = {
  component: TestUtils,
  title: 'TestUtils',
};
export default meta;
type Story = StoryObj<typeof TestUtils>;

export const Primary = {
  args: {},
};
