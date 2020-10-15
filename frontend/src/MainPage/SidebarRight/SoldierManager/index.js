import React from "react";
import { Table } from "semantic-ui-react";
import DataRow from "./DataRow";
import RegisterSoldier from "./RegisterSoldier";
import DeleteSoldier from "./DeleteSoldier";

const fetch = require("node-fetch");
const SoldierManager = () => {
  const [arr, setArr] = React.useState([]);

  const getTableData = () => {
    fetch("http://18.219.142.74:8081/database/user", {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        let data = await res.json();
        console.log("GET");
        console.log(data);
        if (arr.length !== data.length) {
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
      } else {
        console.log(res);
      }
    });
  };

  const buttonStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    float: "right",
  };

  getTableData();

  return (
    <div>
      <div style={buttonStyle}>
        <RegisterSoldier getTableData={getTableData} />
        <DeleteSoldier getTableData={getTableData} />
      </div>
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Military Number</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone Out</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone In</Table.HeaderCell>
            <Table.HeaderCell>Recent Roll</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{arr}</Table.Body>
      </Table>
    </div>
  );
};

export default SoldierManager;
