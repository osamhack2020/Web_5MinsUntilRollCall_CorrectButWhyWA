import React from "react";
import { Segment, Sidebar } from "semantic-ui-react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const MainPage = () => {
  const sidebarStyle = {
    minHeight: "100vw",
  };

  return (
    <Sidebar.Pushable as={Segment} style={sidebarStyle}>
      <SidebarLeft />
      <SidebarRight />
    </Sidebar.Pushable>
  );
};

export default MainPage;
