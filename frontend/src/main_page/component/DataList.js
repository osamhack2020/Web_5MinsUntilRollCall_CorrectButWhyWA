import React from "react";
import { Segment, Grid, Table } from "semantic-ui-react";
import "../index.css";
const fetch = require("node-fetch");

const DataRow = ({ name, military_number, phone_out, phone_in, roll }) => {
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{military_number}</Table.Cell>
      <Table.Cell>{phone_out}</Table.Cell>
      <Table.Cell>{phone_in}</Table.Cell>
      <Table.Cell>{roll}</Table.Cell>
    </Table.Row>
  );
};

const DataArr = () => {
  const [arr, setArr] = React.useState([]);

  fetch("http://18.219.142.74:8081/database", {
    method: "GET",
    credentials: "include",
  }).then(async (res) => {
    if (res.ok) {
      let data = await res.json();
      if (arr.length !== data.length)
        setArr(
          data.map((info) => (
            <DataRow
              name={info.name}
              military_number={info.military_number}
              phone_out={info.phone_out}
              phone_in={info.phone_in}
              roll={info.roll}
              key={info.military_number}
            />
          ))
        );
    }
  });

  return arr;
};

const DataList = ({ rows }) => {
  return (
    <Table.Body>
      <DataArr />
    </Table.Body>
  );
};

export default DataList;
