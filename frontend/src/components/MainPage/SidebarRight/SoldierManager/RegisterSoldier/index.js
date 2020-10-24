import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../../redux/actions/index.js";
import { soldierManagerGetArr } from "../../../../../functions/getArr.js";
const fetch = require("node-fetch");

const RegisterSoldier = () => {
  const dispatch = useDispatch();
  const registerSoldier = useSelector((store) => store.registerSoldier);

  const registerSoldierDatabase = (name, military_number) => {
    fetch("http://18.219.142.74:8081/database/register", {
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
      onClose={() => dispatch(actions.registerSoldierSetOpen(false))}
      onOpen={() => dispatch(actions.registerSoldierSetOpen(true))}
      open={registerSoldier.open}
      trigger={
        <Button
          content="Register Soldier"
          labelPosition="right"
          icon="user add"
          positive
          size="large"
          style={buttonStyle}
        />
      }
      size="mini"
    >
      <Modal.Header>Register Soldier</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
                placeholder="Hong Gildong"
                value={registerSoldier.name}
                onChange={(e) =>
                  dispatch(actions.registerSoldierSetName(e.target.value))
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Military Number</label>
              <input
                placeholder="01-23456789"
                value={registerSoldier.militaryNumber}
                onChange={(e) =>
                  dispatch(
                    actions.registerSoldierSetMilitaryNumber(e.target.value)
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
          onClick={() => dispatch(actions.registerSoldierSetOpen(false))}
        >
          Cancel
        </Button>
        <Button
          content="Register"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            registerSoldierDatabase(
              registerSoldier.name,
              registerSoldier.militaryNumber
            );
            dispatch(actions.registerSoldierSetOpen(false));
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default RegisterSoldier;
