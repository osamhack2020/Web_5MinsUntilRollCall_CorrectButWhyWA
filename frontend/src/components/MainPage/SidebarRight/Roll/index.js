import React from "react";
import { Table, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { rollGetArr } from "../../../../functions/getArr.js";
import * as actions from "../../../../redux/actions/index.js";

const Roll = () => {
  const dispatch = useDispatch();
  const roll = useSelector((store) => store.roll);

  React.useEffect(() => {
    const timerUid = setInterval(async () => {
      console.log(roll.time, roll.start);
      dispatch(actions.rollSetArr(await rollGetArr(roll.time, roll.start)));
    }, 500);
    return () => clearInterval(timerUid);
  }, [dispatch, roll]);

  const divStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    float: "right",
  };

  const buttonStyle = {
    width: "220px",
  };

  return (
    <div>
      <div style={divStyle}>
        <Button
          circular
          icon="refresh"
          onClick={async () => {
            dispatch(
              actions.rollSetArr(await rollGetArr(roll.time, roll.start))
            );
          }}
          style={{ marginRight: "10px" }}
        />
        <Button
          content="Start Roll"
          labelPosition="right"
          icon="users"
          positive
          size="large"
          style={buttonStyle}
          onClick={async () => {
            dispatch(actions.rollSetStart(true));
            dispatch(actions.rollSetTime(new Date()));
            dispatch(
              actions.rollSetArr(await rollGetArr(roll.time, roll.start))
            );
          }}
        />
        <Button
          content="Stop Roll"
          labelPosition="right"
          icon="users"
          negative
          size="large"
          style={buttonStyle}
          onClick={() => {
            dispatch(actions.rollSetStart(false));
          }}
        />
      </div>
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Military Number</Table.HeaderCell>
            <Table.HeaderCell>Recent Roll</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{roll.arr}</Table.Body>
      </Table>
    </div>
  );
};

export default Roll;
