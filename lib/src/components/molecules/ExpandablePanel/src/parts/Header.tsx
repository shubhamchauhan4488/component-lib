import React from 'react';
import styled from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT } from '../constants';
import typography from '../../../../../typography';
import {Icon} from '../../../../atoms/Icon/src';
import { brandingColors } from '../../../../../colors';
import { JSX } from 'react/jsx-runtime';
import { HeaderProps } from '../../docs/ExpandablePanel.types';
import {defaultTheme} from '../../../../../theme';

const HeaderWrapper = styled.div<HeaderProps>`
  cursor: pointer;
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.SECONDARY ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? 'flex-start' : 'space-between'};
  padding: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme?.header?.border || defaultTheme.header.border}; // Use default theme
  background-color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme?.header?.primaryBg || defaultTheme.header.primaryBg // Use default theme
      : theme?.header?.secondaryBg || defaultTheme.header.secondaryBg}; // Use default theme
  color: ${({ theme, variant }) => {
    if (variant === EXPANDABLE_PANEL_VARIANT.PRIMARY) {
      return theme?.header?.primaryText || defaultTheme.header.primaryText; // Use default theme
    }
    return theme?.header?.secondaryText || defaultTheme.header.secondaryText; // Use default theme
  }};
  font-family: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? typography.fontFamilySansDemibold
      : typography.fontFamilySansLight};
`;

const HeaderTitle = styled.span<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  display: inline-block;
  font-size: 18px;
  font-family: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? typography.fontFamilySansDemibold
      : typography.fontFamilySansLight};
  color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme?.header?.primaryText || defaultTheme.header.primaryText // Use default theme
      : theme?.header?.secondaryText || defaultTheme.header.secondaryText}; // Use default theme
`;

const IconWrapper = styled.div`
  margin-right: 12px;
`;

const getIcon = (
  isExpanded: boolean,
  ExpandIcon: React.FC<{}> | (() => JSX.Element),
  CollapseIcon: React.FC<{}> | (() => JSX.Element),
  variant: EXPANDABLE_PANEL_VARIANT
) => {
  if (variant === EXPANDABLE_PANEL_VARIANT.PRIMARY) {
    if (!isExpanded) {
      return ExpandIcon ? <ExpandIcon /> : (
        <Icon
          name="plus"
          strokeColor={brandingColors.light_2_green}
        />
      );
    } else {
      return CollapseIcon ? <CollapseIcon /> : (
        <Icon
          name="minus"
          strokeColor={brandingColors.light_2_green}
        />
      );
    }
  }

  // variant === EXPANDABLE_PANEL_VARIANT.SECONDARY
  if (!isExpanded) {
    return ExpandIcon ? <ExpandIcon /> : (
      <Icon
        name="plus_withcircle"
        size={24}
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  } else {
    return CollapseIcon ? <CollapseIcon /> : (
      <Icon
        name="minus_withcircle"
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  }
};
export const Header: React.FC<HeaderProps> = ({
  expandItem,
  isExpanded,
  title,
  ariaLabel,
  // headerTitleSc,
  // headerWrapperSc,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  id,
  ariaControls,
  ExpandIcon = () => <Icon name="minus" />,
  CollapseIcon = () => <Icon name="plus" />,
}) => (
  <HeaderWrapper
    data-accordion-header
    id={id}
    tabIndex={0}
    variant={variant}
    onClick={expandItem}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        expandItem();
      }
    }}
    // style={headerWrapperSc}
    role="button"
    aria-label={ariaLabel}
    aria-expanded={isExpanded}
    aria-controls={ariaControls}
  >
    <IconWrapper>
      {getIcon(isExpanded, ExpandIcon, CollapseIcon, variant)}
    </IconWrapper>
    <HeaderTitle variant={variant}>
      {title}
    </HeaderTitle>
  </HeaderWrapper>
);
