import React, { useState } from "react";
import Form from "./components/common/Form";
import Table from "./components/common/Table";
const data = [
  { model: "falcon", engine: "Reactive Twin Turbo", maxSpeed: "430,000" },
  { model: "Starlight X", engine: "Fusion Powered", maxSpeed: "280,000" },
];
const columns = Object.keys(data[0]);
const StarshipPage = () => {
  const [starships, setStarship] = useState(data);
  // console.log(people);

  const handleAppStarship = (starshipData) => {
    const data = [...starships, starshipData];
    setStarship(data);
  };

  const getInitialStarshipData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  return (
    <div className="container">
      <h2>Starships</h2>
      <Table data={starships} columns={columns} tableDescriptor="Starships" />
      <Form
        initialData={getInitialStarshipData()}
        columns={columns}
        onAddData={handleAppStarship}
      />
    </div>
  );
};
export default StarshipPage;
