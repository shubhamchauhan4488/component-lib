import React, { useContext } from 'react';
import { ExpandablePanel, Accordion, Icon } from '@shubham_chauhan/component-lib/components';
import { AppThemeContext } from './AppContext';
import './App.css';

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
      backgroundColor: theme.colors.expandablePanelHeaderPrimaryBg,
      color: theme.colors.expandablePanelHeaderPrimaryText,
      border: 'none',
      borderRadius: '4px'
    }}
    aria-label='Toggle theme'
  >
    {children}
  </button>
);

const ExpandablePanelContent = () => (
  <Paragraph>
    This content is inside a standalone Expandable Panel. It demonstrates how a molecule component can be leveraged
    individually with theme‐based styling.
  </Paragraph>
);

function App() {
  const { themeName, theme, toggleTheme } = useContext(AppThemeContext);

  const accordionItems = [
    {
      id: 'panel-1',
      title: 'Accordion Panel 1',
      content: <Paragraph>This is the content of Accordion Panel 1.</Paragraph>
    },
    {
      id: 'panel-2',
      title: 'Accordion Panel 2',
      content: <Paragraph>This is the content of Accordion Panel 2.</Paragraph>
    }
  ];

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: theme.typography.fontFamilies.base,
        backgroundColor: theme.colors.background
      }}
    >
      <h1 style={{ color: theme.colors.textPrimary }}>Components: A visual craft!</h1>

      <ThemedButton onClick={toggleTheme} theme={theme}>
        {themeName === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </ThemedButton>

      {/* Icon Component */}
      <Section title='Icon (Atom Component)'>
        <Paragraph>
          The Icon component is an atomic-level component – the smallest building block in a design system.
        </Paragraph>
        <Icon name='plus_withcircle' size={24} strokeColor='coral' fill='white' />
        <Icon name='minus' size={32} strokeColor='green' />
      </Section>

      {/* ExpandablePanel Component */}
      <Section title='ExpandablePanel (Molecule Component)'>
        <Paragraph>
          The ExpandablePanel is a molecule-level component which can be used directly. – It represents a single
          expandable panel with a header and content area. – 'expandedByDefault' sets the default expansion state.
        </Paragraph>
        <Section title='Primary Variant'>
          <ExpandablePanel id='my-expandable-panel' title='Standalone Expandable Panel' expandedByDefault={false}>
            <ExpandablePanelContent />
          </ExpandablePanel>
        </Section>

        <Section title='Secondary Variant'>
          <ExpandablePanel id='my-expandable-panel' title='Standalone Expandable Panel' variant='secondary' expandedByDefault={false}>
            <ExpandablePanelContent />
          </ExpandablePanel>
        </Section>

        <Section title='ExpandablePanel Open by Default'>
          <ExpandablePanel id='my-expandable-panel' title='Standalone Expandable Panel' expandedByDefault={true}>
            <ExpandablePanelContent />
          </ExpandablePanel>
        </Section>

        <Section title='Custom Icons'>
          <ExpandablePanel
            id='my-expandable-panel'
            title='Standalone Expandable Panel'
            variant='primary'
            expandedByDefault={false}
            ExpandIcon={() => <span>👇</span>}
            CollapseIcon={() => <span>👆</span>}
          >
            <ExpandablePanelContent />
          </ExpandablePanel>
        </Section>

        <Section title='Custom Styles'>
          <ExpandablePanel id='custom-styles-panel' title='Panel with Custom Styles' variant='primary' expandedByDefault={false}>
            <ExpandablePanelContent />
          </ExpandablePanel>
        </Section>
      </Section>

      {/* Accordion Component */}
      <Section title='Accordion (Compound Component)'>
        <Paragraph>
          The Accordion component is a compound component that organizes multiple Expandable Panels. It serves as a
          higher-level component that manages the state and behavior for a collection of 'Expandable Panels'.
        </Paragraph>
        <Section title='Primary Variant'>
          <Accordion items={accordionItems} panelVariant='primary' allowMultipleOpen={false} />
        </Section>

        <Section title='Secondary Variant'>
          <Accordion items={accordionItems} panelVariant='secondary' allowMultipleOpen={false} />
        </Section>

        <Section title='Accordion Multiple Panel Open'>
          <Accordion items={accordionItems} panelVariant='primary' allowMultipleOpen={true} />
        </Section>
      </Section>

      <h3 style={{ color: theme.colors.textPrimary }}>
        For more docs, checkout here: <a href='https://67e03155d6ee9e0a477dad36-ektwzfzbxw.chromatic.com/'>Storybook</a>
      </h3>
    </div>
  );
}

export default App;