export interface Column<T> {
  id: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}
