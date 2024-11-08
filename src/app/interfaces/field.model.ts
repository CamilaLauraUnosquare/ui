export interface FieldType {
  fieldType: string;
  fieldName: string;
  placeholder?: string;
  requiered?: boolean;
  disabled?: boolean;
  value: string | number;
  label: string;
  onChange: any;
  items?: DropdownItem[]
}
export interface DropdownItem{
    id: number,
    name: string
}