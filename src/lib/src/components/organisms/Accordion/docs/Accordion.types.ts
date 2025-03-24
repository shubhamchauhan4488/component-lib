import { EXPANDABLE_PANEL_VARIANT } from "../../../molecules/ExpandablePanel/constants";

export interface AccordionCommonProps {
  panelVariant?: EXPANDABLE_PANEL_VARIANT;
  /**
   * false (default)-> only one panel can be open at a time;
   * true-> multiple panels can be expanded.
   */
  allowMultipleOpen?: boolean;
    ExpandIcon?: React.FC;
    CollapseIcon?: React.FC;
}

export interface AccordionItem {
  id?: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps extends AccordionCommonProps {
  mode?: 'data';
  items: AccordionItem[];
  children?: never;
}
