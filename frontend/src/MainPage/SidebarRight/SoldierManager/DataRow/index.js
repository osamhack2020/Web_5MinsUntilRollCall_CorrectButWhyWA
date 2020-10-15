import React from "react";
import { Table } from "semantic-ui-react";

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

export default DataRow;
