import React from "react";
import "./index.css";
import {
  Button,
  Form,
  Divider,
  Modal,
  Image,
  Header,
  Checkbox,
} from "semantic-ui-react";

const LoginPage = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <Form>
          <Form.Field>
            <Form.Input
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              placeholder="Password"
            />
          </Form.Field>

          <div>
            <Button
              inverted
              color="violet"
              type="submit"
              className="sign-button"
            >
              Sign in
            </Button>

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
                    <input placeholder="Email" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input placeholder="Password" />
                  </Form.Field>
                  <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label="I'm a military officer." />
                  </Form.Field>
                </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  content="Sign up"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
