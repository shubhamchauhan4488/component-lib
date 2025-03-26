import React, { useMemo } from 'react';
import { IconProps } from '../docs/Icon.types';

export const Icon: React.FC<IconProps> = ({
  name,
  size = 12,
  strokeColor = 'black',
  fill,
}) => {
  const iconElement = useMemo(() => {
    switch (name) {
      case 'plus':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-plus"
          >
            <line x1="8" y1="2" x2="8" y2="16" stroke={strokeColor} strokeWidth="2" />
            <line x1="2" y1="9" x2="14" y2="9" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case 'minus':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-minus"
          >
            <line x1="2" y1="9" x2="14" y2="9" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case 'plus_withcircle':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-plus_withcircle"
          >
            <circle cx="10" cy="10" r="9" fill={fill} stroke={strokeColor} strokeWidth="2" />
            <line x1="10" y1="4" x2="10" y2="16" stroke={strokeColor} strokeWidth="2" />
            <line x1="4" y1="10" x2="16" y2="10" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case 'minus_withcircle':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-minus_withcircle"
          >
            <circle cx="10" cy="10" r="9" fill={fill} stroke={strokeColor} strokeWidth="2" />
            <line x1="4" y1="10" x2="16" y2="10" stroke={strokeColor} strokeWidth="2" />
          </svg>
        );
      case 'collapsed':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-collapsed"
          >
            <polygon points="3,2 9,6 3,10" fill={fill} stroke={strokeColor} strokeWidth="1" />
          </svg>
        );
      case 'expanded':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="icon-expanded"
          >
            <polygon points="2,3 6,9 10,3" fill={fill} stroke={strokeColor} strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  }, [name, size, strokeColor, fill]);

  return iconElement;
};