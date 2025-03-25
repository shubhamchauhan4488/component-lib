import React from 'react';
import { Meta } from '@storybook/react';
import  {ExpandablePanel } from '../src/index';
import { EXPANDABLE_PANEL_VARIANT } from '../src/constants';
import { brandingColors } from '../../../../colors';
import {Icon} from '../../../atoms/Icon/src';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../../../theme';
import { ExpandablePanelProps } from './ExpandablePanel.types';

export default {
  title: 'Molecules/ExpandablePanel',
  component: ExpandablePanel,
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      options: Object.values(EXPANDABLE_PANEL_VARIANT),
      control: { type: 'radio' },
    },
    expandedByDefault: {
      control: { type: 'boolean' },
    },
  },
} as Meta<ExpandablePanelProps>;

export const Default = {
  args: {
    id: 'default-panel',
    title: 'Default Panel',
    children: <p>This is the default expandable panel content.</p>,
    variant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
    expandedByDefault: false,
  },
};

export const ExpandedByDefault = {
  args: {
    id: 'expanded-panel',
    title: 'Expanded By Default',
    children: <p>This panel starts expanded.</p>,
    variant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
    expandedByDefault: true,
  },
};

export const SecondaryVariant = {
  args: {
    id: 'secondary-panel',
    title: 'Secondary Variant Panel',
    children: <p>This panel uses the secondary variant styling.</p>,
    variant: EXPANDABLE_PANEL_VARIANT.SECONDARY,
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
    expandedByDefault: false,
  },
};

export const CustomIcons = {
  args: {
    id: 'custom-icons-panel',
    title: 'Panel with Custom Icons',
    children: <p>This panel uses custom icons for expand/collapse.</p>,
    variant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
    expandedByDefault: false,
    ExpandIcon: () => <span>👇</span>,
    CollapseIcon: () => <span>👆</span>,
  },
};

// export const CustomStyles = {
//   args: {
//     id: 'custom-styles-panel',
//     title: 'Panel with Custom Styles',
//     children: <p>This panel applies custom styles.</p>,
//     variant: EXPANDABLE_PANEL_VARIANT.PRIMARY,
//     expandedByDefault: false,
//     // customStyle: {
//     //   wrapperStyleSc: { backgroundColor: 'lightblue', border: '2px dashed blue' },
//     //   headerTitleSc: { color: 'darkblue', fontSize: '20px' },
//     //   headerWrapperSc: { padding: '10px' },
//     //   bodyWrapperSc: { padding: '20px', fontStyle: 'italic' },
//     // },
//   },
// };