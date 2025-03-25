import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../src/index';
import { brandingColors } from '../../../../colors/colors';
import { IconProps } from './Icon.types';

const meta: Meta<IconProps> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: ['plus', 'minus', 'plus_withcircle', 'minus_withcircle'],
      control: { type: 'select' },
    },
    size: {
      control: { type: 'number' },
    },
    strokeColor: {
      options: Object.values(brandingColors),
      control: { type: 'select' },
    },
    fill: {
      options: Object.values(brandingColors),
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Plus: Story = {
  args: {
    name: 'plus',
    size: 24,
    strokeColor: brandingColors.m_green,
  },
};

export const Minus: Story = {
  args: {
    name: 'minus',
    size: 24,
    strokeColor: brandingColors.m_green,
  },
};

export const PlusWithCircle: Story = {
  args: {
    name: 'plus_withcircle',
    size: 24,
    fill: brandingColors.white,  // White inner circle
    strokeColor: brandingColors.coral,
  },
};

export const MinusWithCircle: Story = {
  args: {
    name: 'minus_withcircle',
    size: 24,
    fill: brandingColors.white,
    strokeColor: brandingColors.coral,
  },
};

export const CustomColors: Story = {
  args: {
    name: 'plus_withcircle',
    size: 32,
    fill: brandingColors.light_2_grey,
    strokeColor: brandingColors.light_3_blue,
  },
};