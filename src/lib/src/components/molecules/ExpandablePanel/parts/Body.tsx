import React from 'react';
import styled from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT } from '../constants';
import { BodyProps } from '../docs/ExpandablePanel.types';

const BodyWrapper = styled.div<{ isExpanded: boolean; variant?: EXPANDABLE_PANEL_VARIANT }>`
  line-height: 1.5em;
  transition: max-height 0.3s, opacity 0.3s;
  overflow: auto;
  max-height: ${({ isExpanded }) => (isExpanded ? '500px' : '0')};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  display: block;
  font-weight: 300;
  padding: ${({ isExpanded, variant }) =>
    isExpanded
      ? variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? '16px 24px' : '12px 20px'
      : '0 20px'};
  background-color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.body.primaryBg
      : theme.body.secondaryBg};
  color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.body.primaryText
      : theme.body.secondaryText};
`;

export const Body: React.FC<BodyProps> = ({
  id,
  content,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  isExpanded,
  ariaLabelledBy,
  // bodyWrapperSc,
}) => (
  <BodyWrapper
    role="region"
    // style={bodyWrapperSc}
    isExpanded={isExpanded}
    id={id}
    aria-labelledby={ariaLabelledBy}
    variant={variant}
  >
    {content}
  </BodyWrapper>
);

/**
 * Recommendation: For a React component library aiming for optimal tree-shaking, it is strongly recommended to use named exports for individual components. This practice provides greater clarity about what is being exported and imported and allows consuming applications to benefit more effectively from tree-shaking.
To facilitate proper exporting, structuring the component library's source code in a modular way is beneficial . A common pattern involves placing each component in its own directory with an index.ts (or index.js) 
 */