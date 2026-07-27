import * as XLSX from "xlsx";

export function autoFitColumns(worksheet: XLSX.WorkSheet, data: object[]) {
  const keys = Object.keys(data[0]);

  const cols = keys.map((key) => {
    const maxLength = Math.max(
      key.length,
      ...data.map((item) => String(item[key as keyof typeof item]).length),
    );

    return {
      wch: maxLength + 2,
    };
  });

  worksheet["!cols"] = cols;
}
