import React from "react";
import { Sidebar } from "semantic-ui-react";
import SoldierManager from "./SoldierManager";
import Roll from "./Roll";
import Phone from "./Phone";
import { useSelector } from "react-redux";

const SidebarRight = () => {
  const sidebarRight = useSelector((store) => store.sidebarRight);

  const sidebarRightStyle = {
    width: "85vw",
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const ConditionComponent = ({ component }) => {
    if (component === "SoldierManager") return <SoldierManager />;
    else if (component === "Roll") return <Roll />;
    else if (component === "Phone") return <Phone />;
    else {
      console.log(component);
      return <p>Fuck</p>;
    }
  };

  return (
    <Sidebar.Pusher style={sidebarRightStyle}>
      <ConditionComponent component={sidebarRight.component} />
    </Sidebar.Pusher>
  );
};

export default SidebarRight;
