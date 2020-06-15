import React, { useState } from "react";
import Table from "./components/common/Table";

import Form from "./components/common/Form";
const data = [
  { planet: "Earth", population: "7billions", radius: "6371km" },
  { planet: "Mars", population: "0", radius: "3,389km" },
];
const columns = Object.keys(data[0]);
const PlanetsPage = () => {
  const [planets, setPlanet] = useState(data);
  // console.log(people);

  const handleAppPlanet = (planetData) => {
    const data = [...planets, planetData];
    setPlanet(data);
  };

  const getInitialPlanetData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };
  return (
    <div className="container">
      <h2>Planets </h2>
      <Table data={planets} columns={columns} tableDescriptor="Planet" />
      <Form
        initialData={getInitialPlanetData()}
        columns={columns}
        onAddData={handleAppPlanet}
      />
    </div>
  );
};
export default PlanetsPage;
