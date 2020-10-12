import React from "react";
import { Segment, Sidebar, Table } from "semantic-ui-react";
import "../index.css";
import DataList from "./DataList.js";

const SidebarRight = () => {
  return (
    <Sidebar.Pusher className="side-bar-right">
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Military Number</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone Out</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone In</Table.HeaderCell>
            <Table.HeaderCell>Recent Roll</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <DataList />
      </Table>
    </Sidebar.Pusher>
  );
};

export default SidebarRight;
