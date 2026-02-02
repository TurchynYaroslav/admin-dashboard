import type { Column } from "./table.types";

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (row: T) => React.Key;
}

function Table<T>({ data, columns, getRowKey }: TableProps<T>) {
  function renderCell(column: Column<T>, row: T) {
    if (column.type === "data") {
      const value = String(row[column.id]);
      return column.render ? column.render(row[column.id], row) : value;
    }
    if (column.type === "actions") {
      return (
        <div className="grid gap-2">
          {column.actions.map((action) => (
            <button
              className="border px-4 justify-center bg-amber-600"
              key={action.id}
              onClick={() => action.callback(row)}
            >
              {action.label}
            </button>
          ))}
        </div>
      );
    }
  }
  return (
    <table className="">
      <thead>
        <tr className="">
          {columns.map((column) => {
            return <th key={column.label}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={getRowKey(row)} className="">
              {columns.map((column) => (
                <td key={column.label}>{renderCell(column, row)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
