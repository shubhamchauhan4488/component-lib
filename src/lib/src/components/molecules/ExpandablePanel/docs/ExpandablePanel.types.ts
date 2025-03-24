import { EXPANDABLE_PANEL_VARIANT } from "../constants";

export interface BodyProps {
  id: string;
  content: React.ReactNode;
  variant?: EXPANDABLE_PANEL_VARIANT;
  // bodyWrapperSc?: React.CSSProperties;
  isExpanded: boolean;
  ariaLabelledBy: string;
}
export interface HeaderProps {
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

export interface ExpandablePanelProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  variant?: EXPANDABLE_PANEL_VARIANT;
  isExpanded?: boolean;          // controlled value from parent
  onToggle?: () => void;         // controlled toggle handler from parent
  ExpandIcon?: React.FC;
  CollapseIcon?: React.FC;
  expandedByDefault?: boolean;   // fallback default if uncontrolled
  ariaLabel?: string;
}