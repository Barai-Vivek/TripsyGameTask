export interface CardSelectionProps {
  onSelect: (item?: string) => void;
  passedData?: string;
  myTurn: boolean;
}
export interface FooterProps {
  showDiscardBtn: boolean;
  discardSelection: (item?: string) => void;
  myTurn: boolean;
}
