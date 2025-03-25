import React, { useState, useRef, useMemo, useCallback } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import {ExpandablePanel} from '../../../molecules/ExpandablePanel/src';
import { EXPANDABLE_PANEL_VARIANT } from '../../../molecules/ExpandablePanel/src/constants';
import { uniqueId } from '../../../../utils';
import { AccordionProps } from './../docs/Accordion.types';

const AccordionWrapper = styled.div<{ theme?: DefaultTheme }>`
  width: 100%;
`;

const useAccordionKeyboardNavigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    // Query for header buttons using a data attribute that ExpandablePanel sets.
    const headers = containerRef.current.querySelectorAll<HTMLElement>('[data-accordion-header]');
    if (headers.length === 0) return;
    const currentIndex = Array.from(headers).findIndex(
      (header) => header === document.activeElement
    );
    let nextIndex = currentIndex;
    switch (e.key) {
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % headers.length;
        headers[nextIndex].focus();
        e.preventDefault();
        break;
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + headers.length) % headers.length;
        headers[nextIndex].focus();
        e.preventDefault();
        break;
      case 'Home':
        headers[0].focus();
        e.preventDefault();
        break;
      case 'End':
        headers[headers.length - 1].focus();
        e.preventDefault();
        break;
      default:
        break;
    }
  }, []);

  return { containerRef, handleKeyDown };
};

export const Accordion: React.FC<AccordionProps> = (props) => {
  const { 
    allowMultipleOpen = false, 
    panelVariant = EXPANDABLE_PANEL_VARIANT.PRIMARY 
  } = props;

  const { items, ExpandIcon, CollapseIcon } = props as AccordionProps;

  // Ensure a stable list of items with ids using useMemo
  const computedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        id: item.id || uniqueId('accordion-item-'),
      })),
    [items]
  );

  // Use computedItems to build controlled state
  const [openPanels, setOpenPanels] = useState<{ [key: string]: boolean }>(() =>
    computedItems.reduce((state, item) => ({ ...state, [item.id!]: false }), {})
  );

  const togglePanel = useCallback((panelId: string) => {
    setOpenPanels((prevState) => {
      if (!allowMultipleOpen) {
        const newState: { [key: string]: boolean } = {};
        Object.keys(prevState).forEach((key) => {
          newState[key] = key === panelId ? !prevState[key] : false;
        });
        return newState;
      }
      return { ...prevState, [panelId]: !prevState[panelId] };
    });
  }, [allowMultipleOpen]);

  const { containerRef, handleKeyDown } = useAccordionKeyboardNavigation();

  return (
    <AccordionWrapper ref={containerRef} role="presentation" onKeyDown={handleKeyDown}>
      {computedItems.map(({id, title, content}) => (
        <ExpandablePanel
          key={id}
          id={id!}
          title={title}
          variant={panelVariant}
          isExpanded={openPanels[id]}
          onToggle={() => togglePanel(id)}
          ExpandIcon={ExpandIcon}
          CollapseIcon={CollapseIcon}
        >
          {content}
        </ExpandablePanel>
      ))}
    </AccordionWrapper>
  );
};
