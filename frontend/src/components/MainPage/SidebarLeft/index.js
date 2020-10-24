import React from "react";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/index.js";

const fetch = require("node-fetch");

const SidebarLeft = () => {
  const dispatch = useDispatch();
  const sidebarLeft = useSelector((store) => store.sidebarLeft);

  const handleItemClick = (e, { name }) => {
    dispatch(actions.sidebarLeftSetActiveItem(name));
    dispatch(actions.sidebarRightSetComponent(name));
  };

  React.useEffect(() => {
    fetch("http://correctbutwhywa.koreacentral.cloudapp.azure.com:8081/auth/status", {
      method: "GET",
      credentials: "include",
    }).then(async (res) => {
      if (res.ok) {
        let data = await res.json();
        dispatch(actions.sidebarLeftSetName(data.name));
      }
    });
  }, []);

  return (
    <Sidebar as={Menu} vertical visible inverted>
      <Menu.Item>
        <Menu.Header>
          <p>
            <Icon name="user" />
            {sidebarLeft.name}
          </p>
        </Menu.Header>
      </Menu.Item>

      <Menu.Item
        name="SoldierManager"
        icon="address book outline"
        active={sidebarLeft.activeItem === "SoldierManager"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Phone"
        icon="mobile alternate"
        active={sidebarLeft.activeItem === "Phone"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Roll"
        icon="users"
        active={sidebarLeft.activeItem === "Roll"}
        onClick={handleItemClick}
      />
    </Sidebar>
  );
};

export default SidebarLeft;
