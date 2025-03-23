import React from 'react';
import styled from 'styled-components';
import { EXPANDABLE_PANEL_VARIANT, KEY_CODE } from '../constants';
import typography from '../../../../typography';
import Icon from '../../../atoms/Icon';
import { brandingColors } from '../../../../colors';
import { JSX } from 'react/jsx-runtime';

interface HeaderProps {
  id: string;
  title: string;
  expandItem: () => void;
  isExpanded: boolean;
  headerTitleSc?: React.CSSProperties;
  headerWrapperSc?: React.CSSProperties;
  variant?: EXPANDABLE_PANEL_VARIANT;
  ExpandIcon?: React.FC;
  CollapseIcon?: React.FC;
  ariaControls: string;
  ariaLabel?: string;
}

const HeaderWrapper = styled.div<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  cursor: pointer;
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.SECONDARY ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY ? 'flex-start' : 'space-between'};
  padding: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.header.border};
  background-color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.header.primaryBg
      : theme.header.secondaryBg};
  color: ${({ theme, variant }) => {
    console.log('theme', theme);
    if (variant === EXPANDABLE_PANEL_VARIANT.PRIMARY) {
      return theme.header.primaryText;
    }
    return theme.header.secondaryText;
  }};
  font-family: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? typography.fontFamilySansDemibold
      : typography.fontFamilySansLight};


`;


const HeaderTitle = styled.span<{ variant?: EXPANDABLE_PANEL_VARIANT }>`
  display: inline-block;
  font-size: 18px;
  font-family: ${({ variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? typography.fontFamilySansDemibold
      : typography.fontFamilySansLight};
  color: ${({ theme, variant }) =>
    variant === EXPANDABLE_PANEL_VARIANT.PRIMARY
      ? theme.header.primaryText
      : theme.header.secondaryText};
`;


const IconWrapper = styled.div`
  margin-right: 12px;
`;

const getIcon = (
  isExpanded: boolean,
  ExpandIcon: React.FC<{}> | (() => JSX.Element),
  CollapseIcon: React.FC<{}> | (() => JSX.Element),
  variant: EXPANDABLE_PANEL_VARIANT
) => {
  if (variant === EXPANDABLE_PANEL_VARIANT.PRIMARY) {
    if (!isExpanded) {
      return ExpandIcon ? <ExpandIcon /> : (
        <Icon
          name="plus"
          strokeColor={brandingColors.light_2_green}
        />
      );
    } else {
      return CollapseIcon ? <CollapseIcon /> : (
        <Icon
          name="minus"
          strokeColor={brandingColors.light_2_green}
        />
      );
    }
  }

  // variant === EXPANDABLE_PANEL_VARIANT.SECONDARY
  if (!isExpanded) {
    return ExpandIcon ? <ExpandIcon /> : (
      <Icon
        name="plus_withcircle"
        size={24}
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  } else {
    return CollapseIcon ? <CollapseIcon /> : (
      <Icon
        name="minus_withcircle"
        fill={brandingColors.white}
        strokeColor={brandingColors.coral}
      />
    );
  }
};
const Header: React.FC<HeaderProps> = ({
  expandItem,
  isExpanded,
  title,
  ariaLabel,
  // headerTitleSc,
  // headerWrapperSc,
  variant = EXPANDABLE_PANEL_VARIANT.PRIMARY,
  id,
  ariaControls,
  ExpandIcon = () => <Icon name="minus" />,
  CollapseIcon = () => <Icon name="plus" />,
}) => (
  <HeaderWrapper
    data-accordion-header
    id={id}
    tabIndex={0}
    variant={variant}
    onClick={expandItem}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        expandItem();
      }
    }}
    // style={headerWrapperSc}
    role="button"
    aria-label={ariaLabel}
    aria-expanded={isExpanded}
    aria-controls={ariaControls}
  > 
  <IconWrapper>
  {getIcon(isExpanded, ExpandIcon, CollapseIcon, variant)}
  </IconWrapper>
    <HeaderTitle variant={variant}>
      {title}
    </HeaderTitle>
  </HeaderWrapper>
);

export default Header;