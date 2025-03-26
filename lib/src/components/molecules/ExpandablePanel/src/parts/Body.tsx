import React from 'react';
import styled from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT } from '../constants';
import { BodyProps } from '../../docs/ExpandablePanel.types';
import { defaultTheme } from '../../../../../theme';

const BodyWrapper = styled.div<{ isExpanded: boolean; variant?: EXPANDABLE_PANEL_VARIANT }>`
  line-height: ${({ theme }) => theme.typography.lineHeights.md};
  transition: max-height 0.3s, opacity 0.3s;
  overflow: auto;
  max-height: ${({ isExpanded }) => (isExpanded ? '500px' : '0')};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  display: block;
  font-weight: ${({ theme }) => theme.typography.fontWeights.light};
  
  padding: ${({ isExpanded, variant, theme }) => {
    if (!isExpanded) return `0 ${theme.spacing.lg}`;

    if (variant === EXPANDABLE_PANEL_VARIANT.PRIMARY) {
      return `${theme.spacing.md} ${theme.spacing.lg}`;
    }
    return `${theme.spacing.sm} ${theme.spacing.md}`;
  }};
  
  background-color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.colors.background
      : theme.colors.background};
      
  color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.colors.textPrimary
      : theme.colors.secondaryDark};

  border: 1px solid ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.colors.textPrimary
      : theme.colors.secondaryDark};
`;

BodyWrapper.defaultProps = {
  theme: defaultTheme,
};

export const Body: React.FC<BodyProps> = ({
  id,
  content,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  isExpanded,
  ariaLabelledBy,
}) => (
  <BodyWrapper
    role="region"
    isExpanded={isExpanded}
    id={id}
    aria-labelledby={ariaLabelledBy}
    variant={variant}
    tabIndex={0}
  >
    {content}
  </BodyWrapper>
);
