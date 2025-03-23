import React from 'react';
import styled from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT } from '../constants';

interface BodyProps {
  id: string;
  content: React.ReactNode;
  variant?: EXPANDABLE_PANEL_VARIANT;
  // bodyWrapperSc?: React.CSSProperties;
  isExpanded: boolean;
  ariaLabelledBy: string;
}

const BodyWrapper = styled.div<{ isExpanded: boolean; variant?: EXPANDABLE_PANEL_VARIANT }>`
  line-height: 1.5em;
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  overflow: hidden;
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
  border-radius: 4px;
`;

const Body: React.FC<BodyProps> = ({
  id,
  content,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  isExpanded,
  ariaLabelledBy,
  // bodyWrapperSc,
}) => (
  <BodyWrapper
    // style={bodyWrapperSc}
    isExpanded={isExpanded}
    id={id}
    aria-labelledby={ariaLabelledBy}
    variant={variant}
  >
    {content}
  </BodyWrapper>
);

export default Body;