import React from "react";
import { Table, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { phoneGetArr } from "../../../../functions/getArr.js";
import * as actions from "../../../../redux/actions/index.js";

const Phone = () => {
  const dispatch = useDispatch();
  const phone = useSelector((store) => store.phone);

  React.useEffect(() => {
    let update = async () => dispatch(actions.phoneSetArr(await phoneGetArr()));
    update();
    setInterval(update, 1000);
  }, []);

  const divStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    float: "right",
  };

  return (
    <div>
      <div style={divStyle}>
        <Button
          circular
          icon="refresh"
          onClick={async () =>
            dispatch(actions.phoneSetArr(await phoneGetArr()))
          }
          style={{ marginRight: "10px" }}
        />
      </div>
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Military Number</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone Out</Table.HeaderCell>
            <Table.HeaderCell>Recent Phone In</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{phone.arr}</Table.Body>
      </Table>
    </div>
  );
};

export default Phone;
