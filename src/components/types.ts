export interface CardSelectionProps {
  onSelect: (item?: string) => void;
  passedData?: string;
}
export interface FooterProps {
  showDiscardBtn: boolean;
  discardSelection: (item?: string) => void;
}
