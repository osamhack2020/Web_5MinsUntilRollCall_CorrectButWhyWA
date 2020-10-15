import React from "react";
import { Menu, Sidebar, Icon } from "semantic-ui-react";

const fetch = require("node-fetch");

export default class SidebarLeft extends React.Component {
  state = { activeItem: "account", name: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    console.log("get auth status");

    fetch("http://18.219.142.74:8081/auth/status", {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        console.log(res);
        let data = await res.json();
        if (!this.state.name) this.setState({ name: data.name });
      }
    });

    return (
      <Sidebar as={Menu} secondary vertical visible>
        <Menu.Item>
          <Menu.Header>
            <p>
              <Icon name="user" />
              {this.state.name}
            </p>
          </Menu.Header>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Manage</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="unit"
              active={activeItem === "unit"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="consumer"
              active={activeItem === "consumer"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="rails"
              active={activeItem === "rails"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="python"
              active={activeItem === "python"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="php"
              active={activeItem === "php"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="shared"
              active={activeItem === "shared"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="dedicated"
              active={activeItem === "dedicated"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="email"
              active={activeItem === "email"}
              onClick={this.handleItemClick}
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name="faq"
              active={activeItem === "faq"}
              onClick={this.handleItemClick}
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Sidebar>
    );
  }
}
