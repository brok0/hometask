import React from "react";

function Table({ columns, data, tableDescriptor }) {
  const CheckForData = (data) => {
    let check = false;
    if (Array.isArray(data) && data) {
      check = true;
    } else {
      check = false;
    }
    return check;
  };
  const DeleteRow = () => {
    document.getElementById("table").DeleteRow();
  };
  return (
    <div>
      <table id="table" hidden={CheckForData()} className="table table-dark">
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
      <h3 id="err" hidden={!CheckForData()}>
        {" "}
        There is no data
      </h3>
    </div>
  );
}

export default Table;
