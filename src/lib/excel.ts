import * as XLSX from "xlsx";
import { autoFitColumns } from "./autoFitColumnsXLSX";
export function exportToExcel<T>(
  data: T[],
  fileName: string,
  sheetName = "Usuários",
) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  autoFitColumns(worksheet, data as object[]);

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}
