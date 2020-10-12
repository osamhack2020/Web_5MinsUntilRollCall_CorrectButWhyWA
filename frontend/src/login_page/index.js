import React from "react";
import "./index.css";
import {
  Button,
  Form,
  Divider,
  Modal,
  Checkbox,
  Message,
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import Loading from "../Component/Loading.js";

const fetch = require("node-fetch");

const LoginPage = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [officer, setOfficer] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log("Change: " + email);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log("Change: " + password);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log("Change: " + name);
  };

  const onChangeOfficer = (e) => {
    setOfficer(!officer);
    console.log("Change: " + officer);
  };

  const checkSignUpFormValid = () => {
    let formValid = false;
    if (email.length === 0) {
      setErrMsg("Email is empty");
    } else if (password.length === 0) {
      setErrMsg("Password is empty");
    } else if (name.length === 0) {
      setErrMsg("Name is empty");
    } else if (!officer) {
      setErrMsg("Check the box please");
    } else {
      setErrMsg("");
      formValid = true;
    }
    return formValid;
  };

  const signUpSubmit = (e) => {
    if (!checkSignUpFormValid()) return;

    console.log("submit sign up form to backend server");
    fetch("http://18.219.142.74:8081/auth/sign_up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      credentials: "include",
    }).then((res) => {
      console.log(res);
      return;
    });

    setOpen(false);
    e.preventDefault();
  };

  const checkSignInFormValid = () => {
    let formValid = false;
    if (email.length === 0) {
      setErrMsg("Email is empty");
    } else if (password.length === 0) {
      setErrMsg("Password is empty");
    } else {
      formValid = true;
    }
    return formValid;
  };

  const signInSubmit = (e) => {
    if (!checkSignInFormValid()) return;
    console.log("submit sign in form to backend server");
    fetch("http://18.219.142.74:8081/auth/sign_in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: "include",
    }).then((res) => {
      console.log(res);
      if (res.ok) setRedirect(true);
    });
    e.preventDefault();
  };

  if (redirect) return <Redirect to="/main" />;

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <Form>
          <Form.Field>
            <Form.Input
              icon="user"
              iconPosition="left"
              placeholder="Email"
              className="form-shadow"
              value={email}
              onChange={onChangeEmail}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              placeholder="Password"
              className="form-shadow"
              value={password}
              onChange={onChangePassword}
            />
          </Form.Field>

          <Button
            inverted
            color="violet"
            type="submit"
            className="sign-button"
            onClick={signInSubmit}
          >
            Sign in
          </Button>

          {errMsg !== "" && <Message error header="Error!" content={errMsg} />}

          <Divider horizontal> OR </Divider>

          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <Button inverted color="green" className="sign-button">
                Sign up
              </Button>
            }
            size="tiny"
          >
            <Modal.Header>Sign up</Modal.Header>

            <Modal.Content>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Name</label>
                  <input placeholder="Name" onChange={onChangeName} />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label="I'm a military officer."
                    onChange={onChangeOfficer}
                  />
                </Form.Field>
              </Form>

              {errMsg !== "" && (
                <Message error header="Error!" content={errMsg} />
              )}
            </Modal.Content>

            <Modal.Actions>
              <Button color="black" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                content="Sign up"
                labelPosition="right"
                icon="checkmark"
                positive
                onClick={signUpSubmit}
              />
            </Modal.Actions>
          </Modal>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
