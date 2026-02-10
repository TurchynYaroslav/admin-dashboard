import { Button } from "../../ui/";
import type { Column } from "./table.types";

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  getRowKey: (row: T) => React.Key;
}

export function Table<T>({ data, columns, getRowKey }: TableProps<T>) {
  function renderCell(column: Column<T>, row: T) {
    if (column.type === "data") {
      const value = String(row[column.id]);
      return column.render ? column.render(row[column.id], row) : value;
    }
    if (column.type === "actions") {
      return (
        <div className="flex gap-2">
          {column.actions.map((action) => (
            <Button
              variant={action.id === "delete" ? "delete" : "edit"}
              key={action.id}
              onClick={() => action.callback(row)}
            >
              {action.label}
            </Button>
          ))}
        </div>
      );
    }
  }
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => {
                return (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    key={column.label}
                  >
                    {column.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => {
              return (
                <tr
                  className="hover:bg-gray-50 transition-colors"
                  key={getRowKey(row)}
                >
                  {columns.map((column) => (
                    <td
                      className="px-4 py-3 text-sm text-gray-900"
                      key={column.label}
                    >
                      {renderCell(column, row)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
