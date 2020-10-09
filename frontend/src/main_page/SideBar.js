import React from "react";
import { Header, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import "./index.css";

export default class SideBar extends React.Component {
  state = { activeItem: "account" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} secondary vertical visible width={3}>
          <Menu.Item>
            <Menu.Header>Products</Menu.Header>

            <Menu.Menu>
              <Menu.Item
                name="enterprise"
                active={activeItem === "enterprise"}
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

        <Sidebar.Pusher>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
