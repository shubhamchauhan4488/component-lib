import { render, screen, fireEvent, within } from '@testing-library/react';
import { ExpandablePanel } from '../src/index';
import { EXPANDABLE_PANEL_VARIANT } from '../src/constants';
import { vi } from 'vitest';

// Mock for consistent IDs for testing
vi.mock('../../../../../utils', () => ({
  uniqueId: vi.fn((prefix) => `${prefix}-test-id`),
}));

describe('ExpandablePanel Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render with default props', () => {
    render(<ExpandablePanel title="Test Title">Test Content</ExpandablePanel>);
    const headerElement = screen.getByRole('button', { name: 'Test Title' });
    const bodyElement = screen.getByText('Test Content');

    expect(headerElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  it('should render with a custom ariaLabel', () => {
    render(<ExpandablePanel ariaLabel="Custom Aria Label" title="Test Title">Test Content</ExpandablePanel>);
    const headerElement = screen.getByRole('button', { name: 'Custom Aria Label' });
    expect(headerElement).toHaveAttribute('aria-label', 'Custom Aria Label');
  });

  it('should render with a custom variant', () => {
    render(<ExpandablePanel variant={EXPANDABLE_PANEL_VARIANT.SECONDARY} title="Test Title">Test Content</ExpandablePanel>);
    const wrapperElement = screen.getByRole('button', { name: 'Test Title' });
    expect(wrapperElement).toBeInTheDocument();
  });

  it('should toggle the panel when the header is clicked', () => {
    render(<ExpandablePanel title="Test Title">Test Content</ExpandablePanel>);
    const headerElement = screen.getByRole('button', { name: 'Test Title' });
    fireEvent.click(headerElement);
    const bodyElement = screen.getByText('Test Content');
    expect(bodyElement).toBeInTheDocument();
  });

  it('should call the onToggle function when the header is clicked', () => {
    const onToggle = vi.fn();
    render(<ExpandablePanel title="Test Title" onToggle={onToggle}>Test Content</ExpandablePanel>);
    const headerElement = screen.getByRole('button', { name: 'Test Title' });
    fireEvent.click(headerElement);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('should use the isExpanded prop when provided (true)', () => {
    render(<ExpandablePanel title="Test Title" isExpanded={true}>Test Content</ExpandablePanel>);
    const bodyElement = screen.getByText('Test Content');
    expect(bodyElement).toBeVisible();
  });

  it('should use the isExpanded prop when provided (false)', () => {
    render(<ExpandablePanel title="Test Title" isExpanded={false}>Test Content</ExpandablePanel>);
    const bodyElement = screen.queryByText('Test Content');
    expect(bodyElement).not.toBeVisible();
  });
  
  it('should render custom ExpandIcon and CollapseIcon', () => {
    const CustomExpandIcon = () => <span data-testid="custom-expand-icon">+</span>;
    const CustomCollapseIcon = () => <span data-testid="custom-collapse-icon">-</span>;

    const { container } = render(
      <ExpandablePanel
        ariaLabel="Custom Aria Label"
        title="Test Title"
        ExpandIcon={CustomExpandIcon}
        CollapseIcon={CustomCollapseIcon}
      >
        Test Content
      </ExpandablePanel>
    );

    const headerElement = within(container).getByRole('button', { name: 'Custom Aria Label' });
    fireEvent.click(headerElement);

    const expandIcon = screen.queryByTestId('custom-expand-icon');
    const collapseIcon = screen.queryByTestId('custom-collapse-icon');

    expect(expandIcon).toBeNull();
    expect(collapseIcon).toBeInTheDocument();
  });
});