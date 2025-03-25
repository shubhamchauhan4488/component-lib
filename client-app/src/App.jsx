import { ThemeProvider } from 'styled-components';

import { ExpandablePanel, Icon, Accordion } from '@shubham_chauhan/component-lib/components';
// import {  lightTheme } from '@shubham_chauhan/component-lib';
import { lightTheme } from './../../lib//src/theme';

import './App.css';
import { useContext } from 'react';
import { AppThemeContext } from './AppContext';

function App() {
  const { theme, toggleTheme } = useContext(AppThemeContext);

  const accordionItems = [
    {
      id: 'panel-1',
      title: 'Accordion Panel 1',
      content: <p>This is the content of Accordion Panel 1.</p>,
    },
    {
      id: 'panel-2',
      title: 'Accordion Panel 2',
      content: <p>This is the content of Accordion Panel 2.</p>,
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px', fontFamily: theme.typography.fontFamilySans }}>
        <h1 style={{ color: theme.header.primaryText }}>Components</h1>
        <button
          onClick={toggleTheme}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: theme.header.primaryBg,
            color: theme.header.primaryText,
            border: 'none',
            borderRadius: '4px'
          }}
          aria-label="Toggle theme"
        >
          {theme === lightTheme ? '🌙 Dark Mode' : '☀ Light Mode'}
        </button>
        {/*
          Accordion (Compound Component):
          - Composed of multiple ExpandablePanel components.
          - Accepts an array of items, each defined with an id, title, and content.
          - The 'panelVariant' prop determines how each panel is styled based on the theme.
          - 'allowMultipleOpen' controls whether multiple panels can be open simultaneously.
        */}
        <div style={{ marginTop: '20px' }}>
          <h2>Accordion (Compound Component)</h2>
          <Accordion
            items={accordionItems}
            panelVariant="primary"
            allowMultipleOpen={false}
          />
          <p>The Accordion component is a compound component that organizes multiple ExpandablePanels.
            It serves as a higher-level component that manages the state and behavior for a collection of "Expandable Panels".
          </p>
        </div>

        {/* ExpandablePanel (Molecule Component) */}

        <div style={{ marginTop: '20px' }}>
          <h2>ExpandablePanel (Molecule Component)</h2>
          <ExpandablePanel
            id="my-expandable-panel"
            title="Standalone Expandable Panel"
            expandedByDefault={false}
          >
            <p>
              This content is inside a standalone Expandable Panel. It demonstrates how a molecule component can
              be leveraged individually with theme-based styling.
            </p>
          </ExpandablePanel>
          <p>The ExpandablePanel is a molecule-level component which can be used directly.
            - It represents a single expandable panel with a header and content area.
            - 'expandedByDefault' sets the default expansion state.
            - It is usually leveraged inside a compound component, but it's equally valuable on its own.
          </p>
        </div>

        {/* Icon (Atom Component) */}
        {/*
          The Icon component is an atomic-level component – the smallest building block in your design system.
          - It is highly reusable and accepts props such as name, size, strokeColor, and fill for customization.
          - In this example, we demonstrate an icon with a circular outline (atom).
        */}
        <div style={{ marginTop: '20px' }}>
          <h2>Icon (Atom Component)</h2>
          <Icon
            name="plus_withcircle"
            size={24}
            strokeColor="coral"
            fill="white"
          />
          <p>The Icon component is an atomic-level component – the smallest building block in a design system.
            - Here it is just for the purpose of contributing to the construction of molecule and then the accordion. It accepts minimal props such as name, size, strokeColor, and fill for customization.
            - In this example, we demonstrate an icon with a circular outline (atom).</p>
        </div>
        <h3 style={{ color: theme.header.primaryText }}>For more docs, checkout here: <a href="#linktostorybook">Storybook</a></h3>
      </div>
    </ThemeProvider>
  );
}

export default App;