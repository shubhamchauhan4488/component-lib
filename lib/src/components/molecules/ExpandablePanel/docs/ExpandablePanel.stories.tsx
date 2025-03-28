import { Meta } from '@storybook/react';
import  {ExpandablePanel } from '../src/index';
import { EXPANDABLE_PANEL_VARIANT } from '../src/constants';
import { ExpandablePanelProps } from './ExpandablePanel.types';

export default {
  title: 'Molecules/ExpandablePanel',
  component: ExpandablePanel,
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
