import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ExpandablePanel, Icon, Accordion } from '@shubham_chauhan/component-lib/components';
import { lightTheme } from '@shubham_chauhan/component-lib';
import { AppThemeContext } from './AppContext';
import './App.css';

// Styled Components
const Section = ({ children, title }) => (
  <div style={{ marginTop: '20px' }}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

const Paragraph = ({ children }) => <p>{children}</p>;

const ThemedButton = ({ onClick, children, theme }) => (
  <button
    onClick={onClick}
    style={{
      marginBottom: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: theme.header.primaryBg,
      color: theme.header.primaryText,
      border: 'none',
      borderRadius: '4px',
    }}
    aria-label="Toggle theme"
  >
    {children}
  </button>
);

const ExpandablePanelContent = () => (
  <Paragraph>
    This content is inside a standalone Expandable Panel. It demonstrates how a molecule component can be leveraged
    individually with theme-based styling.
  </Paragraph>
);

function App() {
  const { theme, toggleTheme } = useContext(AppThemeContext);

  const accordionItems = [
    {
      id: 'panel-1',
      title: 'Accordion Panel 1',
      content: <Paragraph>This is the content of Accordion Panel 1.</Paragraph>,
    },
    {
      id: 'panel-2',
      title: 'Accordion Panel 2',
      content: <Paragraph>This is the content of Accordion Panel 2.</Paragraph>,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px', fontFamily: theme.typography.fontFamilySans }}>
        <h1 style={{ color: theme.header.primaryText }}>Components</h1>

        <ThemedButton onClick={toggleTheme} theme={theme}>
          {theme === lightTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ThemedButton>

        {/* Accordion Component */}
        <Section title="Accordion (Compound Component)">
          <Section title="Primary Variant">
            <Accordion items={accordionItems} panelVariant="primary" allowMultipleOpen={false} />
          </Section>

          <Section title="Secondary Variant">
            <Accordion items={accordionItems} panelVariant="secondary" allowMultipleOpen={false} />
          </Section>

          <Section title="Accordion Multiple Panel Open">
            <Accordion items={accordionItems} panelVariant="primary" allowMultipleOpen={true} />
          </Section>

          <Paragraph>
            The Accordion component is a compound component that organizes multiple ExpandablePanels. It serves as a
            higher-level component that manages the state and behavior for a collection of "Expandable Panels".
          </Paragraph>
        </Section>

        {/* ExpandablePanel Component */}
        <Section title="ExpandablePanel (Molecule Component)">
          <Section title="Primary Variant">
            <ExpandablePanel id="my-expandable-panel" title="Standalone Expandable Panel" expandedByDefault={false}>
              <ExpandablePanelContent />
            </ExpandablePanel>
          </Section>

          <Section title="Secondary Variant">
            <ExpandablePanel
              id="my-expandable-panel"
              title="Standalone Expandable Panel"
              variant="secondary"
              expandedByDefault={false}
            >
              <ExpandablePanelContent />
            </ExpandablePanel>
          </Section>

          <Section title="ExpandablePanel Open by default">
            <ExpandablePanel id="my-expandable-panel" title="Standalone Expandable Panel" expandedByDefault={true}>
              <ExpandablePanelContent />
            </ExpandablePanel>
          </Section>

          <Section title="Custom Icons">
            <ExpandablePanel
              id="my-expandable-panel"
              title="Standalone Expandable Panel"
              variant="primary"
              expandedByDefault={false}
              ExpandIcon={() => <span>👇</span>}
              CollapseIcon={() => <span>👆</span>}
            >
              <ExpandablePanelContent />
            </ExpandablePanel>
          </Section>

          <Section title="Custom Styles">
            <ExpandablePanel
              id="custom-styles-panel"
              title="Panel with Custom Styles"
              variant="primary"
              expandedByDefault={false}
              headerTitleSc={{ color: 'darkblue', fontSize: '20px' }}
            >
              <ExpandablePanelContent />
            </ExpandablePanel>
          </Section>

          <Paragraph>
            The ExpandablePanel is a molecule-level component which can be used directly. - It represents a single
            expandable panel with a header and content area. - 'expandedByDefault' sets the default expansion state. -
            It is usually leveraged inside a compound component, but it's equally valuable on its own.
          </Paragraph>
        </Section>

        {/* Icon Component */}
        <Section title="Icon (Atom Component)">
          <Icon name="plus_withcircle" size={24} strokeColor="coral" fill="white" />
          <Icon name="minus" size={32} strokeColor="green" />
          <Paragraph>
            The Icon component is an atomic-level component – the smallest building block in a design system. - Here it
            is just for the purpose of contributing to the construction of molecule and then the accordion. It accepts
            minimal props such as name, size, strokeColor, and fill for customization. - In this example, we
            demonstrate an icon with a circular outline (atom).
          </Paragraph>
        </Section>

        <h3 style={{ color: theme.header.primaryText }}>
          For more docs, checkout here: <a href="#linktostorybook">Storybook</a>
        </h3>
      </div>
    </ThemeProvider>
  );
}

export default App;