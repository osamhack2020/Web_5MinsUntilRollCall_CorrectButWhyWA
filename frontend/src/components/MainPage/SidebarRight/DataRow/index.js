import React from "react";
import { Table } from "semantic-ui-react";

const DataRow = ({
  name,
  military_number,
  phone_out,
  phone_in,
  roll,
  state = "normal",
  col = [true, true, true],
}) => {
  const positive = state === "positive" ? true : false;
  const negative = state === "negative" ? true : false;

  const [col1, col2, col3] = col;

  return (
    <Table.Row positive={positive} negative={negative}>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{military_number}</Table.Cell>
      {col1 && <Table.Cell>{phone_out}</Table.Cell>}
      {col2 && <Table.Cell>{phone_in}</Table.Cell>}
      {col3 && <Table.Cell>{roll}</Table.Cell>}
    </Table.Row>
  );
};

export default DataRow;
