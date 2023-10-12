interface tableProps {
  tableData: string[][];
}

/**
 * Credit to @bmavity, https://stackoverflow.com/questions/15164655/generate-html-table-from-2d-javascript-array
 * @param tableData - input 2D array to convert
 */

export function Table({ tableData }: tableProps) {
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  tableData.forEach(function (rowData) {
    var row = document.createElement("tr");

    rowData.forEach(function (cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
  return <p>{table.innerHTML}</p>;
}
