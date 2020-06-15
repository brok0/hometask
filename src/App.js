import React, { useState } from "react";
import Table from "./components/common/Table";
import Form from "./components/common/Form";
import Navbar from "./navbar";

// import './App.css';
import "bootstrap/dist/css/bootstrap.css";

/*const data = [
  { first: "Mark", last: "Otto", handle: "@motto", id: "1" },
  { first: "Carl", last: "Reno", handle: "@ceno", id: "2" },
  { first: "Steve", last: "Smith", handle: "@ssteve", id: "3" },
];

const columns = Object.keys(data[0]);*/

function App() {
  /*const [people, setPeople] = useState(data);
  // console.log(people);

  const handleAppPerson = (personData) => {
    const data = [...people, personData];
    setPeople(data);
  };

  const getInitialPeopleData = () => {
    return columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {});
  };*/

  return (
    <div className="container">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
