interface Action<T> {
  id: string;
  label: string;
  callback: (row: T) => void;
}

interface BaseColumn {
  label: string;
}
interface DataColumn<T> {
  type: "data";
  id: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}
interface ActionsColumn<T> {
  type: "actions";
  actions: Action<T>[];
}

export type Column<T> = BaseColumn & (DataColumn<T> | ActionsColumn<T>);
