import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";

const fetch = require("node-fetch");

const RegisterSoldier = ({ getTableData }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [militaryNumber, setMilitaryNumber] = React.useState("");

  const registerSoldier = (name, military_number) => {
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
        getTableData();
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
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Military Number</label>
              <input
                placeholder="01-23456789"
                value={militaryNumber}
                onChange={(e) => setMilitaryNumber(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Register"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            registerSoldier(name, militaryNumber);
            setOpen(false);
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default RegisterSoldier;
