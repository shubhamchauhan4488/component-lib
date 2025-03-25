import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './../src';
import { EXPANDABLE_PANEL_VARIANT } from '../../../molecules/ExpandablePanel/src/constants';
import { uniqueId } from '../../../../utils';
import { vi } from 'vitest';

// Mock for consistent IDs for testing
vi.mock('../../../../utils', () => ({
  uniqueId: vi.fn((prefix) => `${prefix}-test-id`),
}));

const mockItems = [
  { id: 'item-1', title: 'Item 1', content: 'Content 1' },
  { id: 'item-2', title: 'Item 2', content: 'Content 2' },
];

describe('Accordion Component', () => {
  beforeEach(() => {
    (uniqueId as jest.Mock).mockClear();
  });

  it('should render with default props', () => {
    render(<Accordion items={mockItems} />);
    const header1 = screen.getByRole('button', { name: 'Item 1' });
    const header2 = screen.getByRole('button', { name: 'Item 2' });
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });

  it('should toggle the panel when the header is clicked', () => {
    render(<Accordion items={mockItems} />);
    const headerElement = screen.getByRole('button', { name: 'Item 1' });
    fireEvent.click(headerElement);
    const bodyElement = screen.getByText('Content 1');
    expect(bodyElement).toBeVisible();
  });

  it('should only allow one panel to be open when allowMultipleOpen is false', () => {
    render(<Accordion items={mockItems} allowMultipleOpen={false} />);
    const header1 = screen.getByRole('button', { name: 'Item 1' });
    const header2 = screen.getByRole('button', { name: 'Item 2' });
  
    fireEvent.click(header1);
    expect(screen.getByText('Content 1')).toBeVisible();
  
    fireEvent.click(header2);
    expect(screen.getByText('Content 2')).toBeVisible();
  
    const content1 = screen.queryByText('Content 1');
    expect(content1).not.toBeVisible();
  });

  it('should allow multiple panels to be open when allowMultipleOpen is true', () => {
    render(<Accordion items={mockItems} allowMultipleOpen={true} />);
    const header1 = screen.getByRole('button', { name: 'Item 1' });
    const header2 = screen.getByRole('button', { name: 'Item 2' });

    fireEvent.click(header1);
    fireEvent.click(header2);

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('should apply the specified panelVariant to each ExpandablePanel', () => {
    render(<Accordion items={mockItems} panelVariant={EXPANDABLE_PANEL_VARIANT.SECONDARY} />);
    const header1 = screen.getByRole('button', { name: 'Item 1' });
    expect(header1).toBeInTheDocument();
  });

  it('should generate unique IDs for items without IDs', () => {
    const itemsWithoutIds = [
      { title: 'Item 1', content: 'Content 1' },
      { title: 'Item 2', content: 'Content 2' },
    ];
    render(<Accordion items={itemsWithoutIds} />);
    expect(uniqueId).toHaveBeenCalledTimes(2);
  });

  it('should use existing IDs if provided', () => {
    render(<Accordion items={mockItems} />);
    expect(uniqueId).not.toHaveBeenCalled();
  });

  it('should handle keyboard navigation', () => {
    render(<Accordion items={mockItems} />);
    const header1 = screen.getByRole('button', { name: 'Item 1' });
    const header2 = screen.getByRole('button', { name: 'Item 2' });

    header1.focus();
    fireEvent.keyDown(header1, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(header2);

    fireEvent.keyDown(header2, { key: 'ArrowUp' });
    expect(document.activeElement).toBe(header1);

    fireEvent.keyDown(header1, { key: 'End' });
    expect(document.activeElement).toBe(header2);

    fireEvent.keyDown(header2, { key: 'Home' });
    expect(document.activeElement).toBe(header1);
  });
});