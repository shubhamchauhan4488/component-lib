import React from 'react';
import styled, { css } from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT } from '../constants';
import typography from '../../../../../typography';
import { Icon } from '../../../../atoms/Icon/src';
import { brandingColors } from '../../../../../colors';
import { JSX } from 'react/jsx-runtime';
import { HeaderProps } from '../../docs/ExpandablePanel.types';
import { defaultTheme } from '../../../../../theme';

const variantStyles = {
  [EXPANDABLE_PANEL_VARIANT.PRIMARY]: {
    wrapper: css`
      flex-direction: row;
      justify-content: flex-start;
      font-family: ${typography.fontFamilySansDemibold};
      background-color: ${({ theme }) => theme?.header?.primaryBg || defaultTheme?.header?.primaryBg};
      color: ${({ theme }) => theme?.header?.primaryText || defaultTheme?.header?.primaryText};
    `,
    title: css`
      font-family: ${typography.fontFamilySansDemibold};
      color: ${({ theme }) => theme?.header?.primaryText || defaultTheme?.header?.primaryText};
    `,
    expandIcon: <Icon name="plus" strokeColor={brandingColors.light_2_green} />,
    collapseIcon: <Icon name="minus" strokeColor={brandingColors.light_2_green} />
  },
  [EXPANDABLE_PANEL_VARIANT.SECONDARY]: {
    wrapper: css`
      flex-direction: row-reverse;
      justify-content: space-between;
      font-family: ${typography.fontFamilySansLight};
      background-color: ${({ theme }) => theme?.header?.secondaryBg || defaultTheme?.header?.secondaryBg};
      color: ${({ theme }) => theme?.header?.secondaryText || defaultTheme?.header?.secondaryText};
    `,
    title: css`
      font-family: ${typography.fontFamilySansLight};
      color: ${({ theme }) => theme?.header?.secondaryText || defaultTheme?.header?.secondaryText};
    `,
    expandIcon: <Icon name="plus_withcircle" size={24} fill={brandingColors.white} strokeColor={brandingColors.coral} />,
    collapseIcon: <Icon name="minus_withcircle" fill={brandingColors.white} strokeColor={brandingColors.coral} />
  }
};

const HeaderWrapper = styled.div<HeaderProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme?.header?.border || defaultTheme?.header?.border};
  ${({ variant = EXPANDABLE_PANEL_VARIANT.PRIMARY }) => variantStyles[variant].wrapper}
`;

const HeaderTitle = styled.span<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  display: inline-block;
  font-size: 18px;
  ${({ variant = EXPANDABLE_PANEL_VARIANT.PRIMARY }) => variantStyles[variant].title}
`;

const IconWrapper = styled.div`
  margin-right: 12px;
`;

const getIcon = (
  isExpanded: boolean,
  ExpandIcon: React.FC<{}> | (() => JSX.Element) | undefined,
  CollapseIcon: React.FC<{}> | (() => JSX.Element) | undefined,
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
        size={20}
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  } else {
    return CollapseIcon ? <CollapseIcon /> : (
      <Icon
        name="minus_withcircle"
        size={20}
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
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  id,
  ariaControls,
  ExpandIcon,
  CollapseIcon,
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
    role="button"
    aria-label={ariaLabel}
    aria-expanded={isExpanded}
    aria-controls={ariaControls}
  >
    <IconWrapper>
      {getIcon(
        isExpanded,
        ExpandIcon,
        CollapseIcon,
        variant
      )}
    </IconWrapper>
    <HeaderTitle variant={variant}>
      {title}
    </HeaderTitle>
  </HeaderWrapper>
);
