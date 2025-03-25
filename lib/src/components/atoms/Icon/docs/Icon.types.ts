export interface IconProps {
  name:
    | 'plus'
    | 'minus'
    | 'plus_withcircle'
    | 'minus_withcircle'
    | 'collapsed'
    | 'expanded';
  size?: number;
  strokeColor?: string;
  fill?: string;
}
