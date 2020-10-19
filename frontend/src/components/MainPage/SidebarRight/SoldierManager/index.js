import React from "react";
import { Table } from "semantic-ui-react";
import RegisterSoldier from "./RegisterSoldier";
import DeleteSoldier from "./DeleteSoldier";
import { useSelector, useDispatch } from "react-redux";
import { soldierManagerGetArr } from "../../../../functions/getArr.js";
import * as actions from "../../../../redux/actions/index.js";

const SoldierManager = () => {
  const dispatch = useDispatch();
  const soldierManager = useSelector((store) => store.soldierManager);
  const divStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    float: "right",
  };

  React.useEffect(() => {
    setInterval(async () => {
      dispatch(actions.soldierManagerSetArr(await soldierManagerGetArr()));
    }, 1000);
  }, []);

  return (
    <div>
      <div style={divStyle}>
        <RegisterSoldier />
        <DeleteSoldier />
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
        <Table.Body>{soldierManager.arr}</Table.Body>
      </Table>
    </div>
  );
};

export default SoldierManager;
