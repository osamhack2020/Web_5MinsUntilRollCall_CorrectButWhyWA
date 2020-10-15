import React from "react";
import { Sidebar } from "semantic-ui-react";
import SoldierManager from "./SoldierManager";

const SidebarRight = () => {
  const sidebarRightStyle = {
    width: "85vw",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  return (
    <Sidebar.Pusher style={sidebarRightStyle}>
      <SoldierManager />
    </Sidebar.Pusher>
  );
};

export default SidebarRight;
