import React, { useCallback } from 'react';
import styled from 'styled-components';
import {Header} from './parts/Header';
import {Body} from './parts/Body';

import {Icon} from '../../../atoms/Icon/src';
import { EXPANDABLE_PANEL_VARIANT } from './constants';
// import typography from '../../../typography';
import { brandingColors } from '../../../../colors';
import { uniqueId } from '../../../../utils';
import { ExpandablePanelProps } from '../docs/ExpandablePanel.types';

// interface CustomStyle {
//   wrapperStyleSc?: React.CSSProperties;
//   headerTitleSc?: React.CSSProperties;
//   headerWrapperSc?: React.CSSProperties;
//   bodyWrapperSc?: React.CSSProperties;
// }


const Wrapper = styled.div<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  width: 100%;
  border: 1px solid
    ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? brandingColors.light_grey : 'none'};
  color: ${brandingColors.light_1_dark_navy};
`;

export const ExpandablePanel: React.FC<ExpandablePanelProps> = ({
  id = uniqueId('expandable-panel-id'),
  title,
  children,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  isExpanded,
  onToggle,
  // customStyle = {},
  ExpandIcon,
  CollapseIcon,
  expandedByDefault = false,
  ariaLabel,
  ...rest
}) => {
  // const { wrapperStyleSc, headerTitleSc, headerWrapperSc, bodyWrapperSc } = customStyle;

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
        // headerTitleSc={headerTitleSc}
        // headerWrapperSc={headerWrapperSc}
        ExpandIcon={ExpandIcon}
        CollapseIcon={CollapseIcon}
      />
      <Body
        id={`${id}-body`}
        variant={variant}
        content={children}
        isExpanded={expanded}
        ariaLabelledBy={`${id}-header`}
      // bodyWrapperSc={bodyWrapperSc}
      />
    </Wrapper>
  );
};
