import React from "react";
import { Segment, Sidebar } from "semantic-ui-react";
import SidebarLeft from "./component/SidebarLeft.js";
import SidebarRight from "./component/SidebarRight.js";
import "./index.css";

const MainPage = () => {
  return (
    <Sidebar.Pushable as={Segment} className="width-full">
      <SidebarLeft />
      <SidebarRight />
    </Sidebar.Pushable>
  );
};

export default MainPage;
