import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../../redux/actions/index.js";
import { soldierManagerGetArr } from "../../../../../functions/getArr.js";

const fetch = require("node-fetch");

const DeleteSoldier = () => {
  const dispatch = useDispatch();
  const deleteSoldier = useSelector((store) => store.deleteSoldier);

  const deleteSoldierDatabase = (name, military_number) => {
    fetch("http://correctbutwhywa.koreacentral.cloudapp.azure.com:8081/database/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        military_number: military_number,
      }),
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        console.log(res);

        dispatch(actions.soldierManagerSetArr(await soldierManagerGetArr()));
      } else {
        console.log(res);
      }
    });
  };

  const buttonStyle = {
    width: "220px",
  };

  return (
    <Modal
      onClose={() => dispatch(actions.deleteSoldierSetOpen(false))}
      onOpen={() => dispatch(actions.deleteSoldierSetOpen(true))}
      open={deleteSoldier.open}
      trigger={
        <Button
          content="Delete Soldier"
          labelPosition="right"
          icon="user delete"
          negative
          size="large"
          style={buttonStyle}
        />
      }
      size="mini"
    >
      <Modal.Header>Delete Soldier</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Hong Gildong"
                value={deleteSoldier.name}
                onChange={(e) =>
                  dispatch(actions.deleteSoldierSetName(e.target.value))
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Military Number</label>
              <input
                placeholder="01-23456789"
                value={deleteSoldier.militaryNumber}
                onChange={(e) =>
                  dispatch(
                    actions.deleteSoldierSetMilitaryNumber(e.target.value)
                  )
                }
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => dispatch(actions.deleteSoldierSetOpen(false))}
        >
          Cancel
        </Button>
        <Button
          content="Delete"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            deleteSoldierDatabase(
              deleteSoldier.name,
              deleteSoldier.militaryNumber
            );
            dispatch(actions.deleteSoldierSetOpen(false));
          }}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteSoldier;
