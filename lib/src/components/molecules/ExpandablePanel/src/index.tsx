import React, { useCallback } from 'react';
import styled from 'styled-components';
import {Header} from './parts/Header';
import {Body} from './parts/Body';
import { EXPANDABLE_PANEL_VARIANT } from './constants';
import { uniqueId } from '../../../../utils';
import { ExpandablePanelProps } from '../docs/ExpandablePanel.types';

const Wrapper = styled.div<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  width: 100%;
  border: ${({ theme, variant }) => 
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY 
      ? `${theme.borders.width.thin} ${theme.borders.style.solid} ${theme.colors.borderLight}`
      : 'none'};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
export const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  id = uniqueId('expandable-panel-id'),
  title,
  children,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  isExpanded,
  onToggle,
  ExpandIcon,
  CollapseIcon,
  expandedByDefault = false,
  ariaLabel,
  ...rest
}) => {

  // If controlled, use the prop; otherwise fallback to internal state.
  const [internalExpanded, setInternalExpanded] = React.useState(expandedByDefault);
  const expanded = isExpanded === undefined ? internalExpanded : isExpanded;

  const handleToggle = useCallback(() => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalExpanded(!expanded);
    }
  }, [onToggle, expanded]);

  return (
    <Wrapper {...rest} id={id} variant={variant}>
      <Header
        id={`${id}-header`}
        title={title}
        variant={variant}
        ariaLabel={ariaLabel}
        ariaControls={`${id}-body`}
        isExpanded={expanded}
        expandItem={handleToggle}
        ExpandIcon={ExpandIcon}
        CollapseIcon={CollapseIcon}
      />
      <Body
        id={`${id}-body`}
        variant={variant}
        content={children}
        isExpanded={expanded}
        ariaLabelledBy={`${id}-header`}
      />
    </Wrapper>
  );
};
