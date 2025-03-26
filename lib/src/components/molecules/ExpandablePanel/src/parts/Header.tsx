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
      font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textPrimary};
    `,
    title: css`
      font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
      color: ${({ theme }) => theme.colors.textInverse};
    `,
  },
  [EXPANDABLE_PANEL_VARIANT.SECONDARY]: {
    wrapper: css`
      flex-direction: row-reverse;
      justify-content: space-between;
      font-family: ${({ theme }) => theme.typography.fontFamilies.base};
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      border: ${({ theme }) =>
        `${theme.borders.width.thin} ${theme.borders.style.solid} ${theme.colors.secondaryDark}`};
    `,
    title: css`
      font-family: ${({ theme }) => theme.typography.fontFamilies.base};
      color: ${({ theme }) => theme.colors.textInverse};
    `,
  }
};

const HeaderWrapper = styled.div<HeaderProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-bottom: ${({ theme }) =>
    `${theme.borders.width.thin} ${theme.borders.style.solid} ${theme.colors.border}`};
  ${({ variant = EXPANDABLE_PANEL_VARIANT.PRIMARY }) => variantStyles[variant].wrapper}
`;

const HeaderTitle = styled.span<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  ${({ variant = EXPANDABLE_PANEL_VARIANT.PRIMARY }) => variantStyles[variant].title}
`;

HeaderWrapper.defaultProps = {
  theme: defaultTheme,
};

HeaderTitle.defaultProps = {
  theme: defaultTheme,
};

const IconWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacing.sm};
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
          size={16}
          strokeColor={brandingColors.light_1_dark_navy}
        />
      );
    } else {
      return CollapseIcon ? <CollapseIcon /> : (
        <Icon
          name="minus"
          size={16}
          strokeColor={brandingColors.light_1_dark_navy}
        />
      );
    }
  }

  // variant === EXPANDABLE_PANEL_VARIANT.SECONDARY
  if (!isExpanded) {
    return ExpandIcon ? <ExpandIcon /> : (
      <Icon
        name="plus_withcircle"
        size={16}
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  } else {
    return CollapseIcon ? <CollapseIcon /> : (
      <Icon
        name="minus_withcircle"
        size={16}
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
