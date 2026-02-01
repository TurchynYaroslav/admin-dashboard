import type { Column } from "./table.types";

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (row: T) => React.Key;
}

function Table<T>({ data, columns, getRowKey }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={String(column.id)}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={getRowKey(row)}>
              {columns.map((column) => {
                return (
                  <td key={String(column.id)}>
                    {column.render
                      ? column.render(row[column.id], row)
                      : String(row[column.id])}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
