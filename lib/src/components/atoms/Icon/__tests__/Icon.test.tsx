import { render, screen } from '@testing-library/react';
import { Icon } from '../src/index';

describe('Icon Component', () => {
  it('should render the plus icon', () => {
    render(<Icon name="plus" />);
    const svgElement = screen.getByTestId('icon-plus');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render the minus icon', () => {
    render(<Icon name="minus" />);
    const svgElement = screen.getByTestId('icon-minus');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render the plus_withcircle icon', () => {
    render(<Icon name="plus_withcircle" />);
    const svgElement = screen.getByTestId('icon-plus_withcircle');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render the minus_withcircle icon', () => {
    render(<Icon name="minus_withcircle" />);
    const svgElement = screen.getByTestId('icon-minus_withcircle');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render the collapsed icon', () => {
    render(<Icon name="collapsed" />);
    const svgElement = screen.getByTestId('icon-collapsed');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render the expanded icon', () => {
    render(<Icon name="expanded" />);
    const svgElement = screen.getByTestId('icon-expanded');
    expect(svgElement).toBeInTheDocument();
  });

  it('should apply the specified size', () => {
    render(<Icon name="plus" size={24} />);
    const svgElement = screen.getByTestId('icon-plus');
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  it('should apply the specified strokeColor', () => {
    render(<Icon name="plus" strokeColor="red" />);
    const svgElement = screen.getByTestId('icon-plus');
    expect(svgElement.querySelector('line')).toHaveAttribute('stroke', 'red');
  });

  it('should apply the specified fill', () => {
    render(<Icon name="plus_withcircle" fill="blue" />);
    const svgElement = screen.getByTestId('icon-plus_withcircle');
    expect(svgElement.querySelector('circle')).toHaveAttribute('fill', 'blue');
  });
});