import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {Accordion } from '../index';
import { EXPANDABLE_PANEL_VARIANT } from '../../../molecules/ExpandablePanel/constants';
import { ThemeProvider } from 'styled-components';
import { brandingColors } from '../../../../colors';
import {Icon} from '../../../atoms/Icon';
import { lightTheme } from '../../../../theme';
import { AccordionItem } from './Accordion.types';

const items: AccordionItem[] = [
  {
    id: 'panel-1',
    title: 'Panel 1',
    content: <p>This is the content of panel 1.</p>,
  },
  {
    id: 'panel-2',
    title: 'Panel 2',
    content: <p>This is the content of panel 2.</p>,
  },
  {
    id: 'panel-3',
    title: 'Panel 3',
    content: <p>This is the content of panel 3.</p>,
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Organisms/Accordion',
  component: Accordion,

  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    panelVariant: {
      control: 'radio',
      options: Object.values(EXPANDABLE_PANEL_VARIANT),
    },
    allowMultipleOpen: {
      control: 'boolean',
    },
    items: { table: { disable: true } },
    mode: { table: { disable: true } },
  },
};

export default meta;

export const PrimaryVariant: StoryObj<typeof Accordion> = {
  args: {
    items,
    allowMultipleOpen: false,
    panelVariant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
  },
};

export const SecondaryVariant: StoryObj<typeof Accordion> = {
  args: {
    items,
    allowMultipleOpen: false,
    panelVariant: EXPANDABLE_PANEL_VARIANT.SECONDARY,
    ExpandIcon: () => <Icon
      name="plus_withcircle"
      size={16}
      fill={brandingColors.white}
      strokeColor={brandingColors.coral}
    />,
    CollapseIcon: () => <Icon
      name="minus_withcircle"
      size={16}
      fill={brandingColors.white}
      strokeColor={brandingColors.coral}
    />,
  },
};

export const MultipleOpen: StoryObj<typeof Accordion> = {
  args: {
    items,
    allowMultipleOpen: true,
    panelVariant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
  },
};