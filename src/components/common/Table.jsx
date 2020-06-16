import React from "react";

function Table({ columns, data, tableDescriptor }) {
  var rows = document.querySelectorAll("#table tbody tr").length;
  const isEmpty = () => {
    let check;
    if (rows > 0) {
      check = true;
    } else {
      check = false;
      alert("The page is empty");
    }
    return check;
  };

  return (
    <div>
      <table id="table" className="table table-dark">
        <thead>
          <tr>
            <th scope="col">{tableDescriptor}</th>
            {columns.map((columnTitle) => (
              <th key={columnTitle} scope="col">
                {columnTitle}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{++index}</th>
              {columns.map((columnTitle) => (
                <td key={item[columnTitle] + columnTitle}>
                  {item[columnTitle]}
                </td>
              ))}
              <tr>
                <button
                  onClick={() => {
                    document.getElementById("table").deleteRow(item.id);
                  }}
                >
                  {" "}
                  Delete
                </button>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
