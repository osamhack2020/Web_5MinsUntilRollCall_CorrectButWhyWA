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
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/index.js";

const fetch = require("node-fetch");

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginPage = useSelector((store) => store.loginPage);

  const setOpen = (open) => dispatch(actions.loginPageSetOpen(open));
  const setRedirect = (redirect) =>
    dispatch(actions.loginPageSetRedirect(redirect));
  const setEmail = (email) => dispatch(actions.loginPageSetEmail(email));
  const setName = (name) => dispatch(actions.loginPageSetName(name));
  const setOfficer = (officer) =>
    dispatch(actions.loginPageSetOfficer(officer));
  const setPassword = (password) =>
    dispatch(actions.loginPageSetPassword(password));

  const signUpSubmit = (e) => {
    console.log("submit sign up form to backend server");
    fetch("http://correctbutwhywa.koreacentral.cloudapp.azure.com:8081/auth/sign_up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginPage.email,
        password: loginPage.password,
        name: loginPage.name,
      }),
      credentials: "include",
    }).then((res) => {
      console.log(res);
      return;
    });

    setOpen(false);
    e.preventDefault();
  };

  const signInSubmit = (e) => {
    console.log("submit sign in form to backend server");
    fetch("http://correctbutwhywa.koreacentral.cloudapp.azure.com:8081/auth/sign_in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginPage.email,
        password: loginPage.password,
      }),
      credentials: "include",
    }).then((res) => {
      console.log(res);
      if (res.ok) setRedirect(true);
    });
    e.preventDefault();
  };

  if (loginPage.redirect) return <Redirect to="/main" />;

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
              value={loginPage.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              placeholder="Password"
              className="form-shadow"
              value={loginPage.password}
              onChange={(e) => setPassword(e.target.value)}
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

          {loginPage.errMsg !== "" && (
            <Message error header="Error!" content={loginPage.errMsg} />
          )}

          <Divider horizontal> OR </Divider>

          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={loginPage.open}
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
                    value={loginPage.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    value={loginPage.password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Name</label>
                  <input
                    placeholder="Name"
                    value={loginPage.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label="I'm a military officer."
                    onChange={(e) => setOfficer(!loginPage.officer)}
                  />
                </Form.Field>
              </Form>

              {loginPage.errMsg !== "" && (
                <Message error header="Error!" content={loginPage.errMsg} />
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
