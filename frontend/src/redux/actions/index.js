// LoginPage Actions

export const LOGIN_PAGE_SET_OPEN = "LOGIN_PAGE_SET_OPEN";
export const LOGIN_PAGE_SET_EMAIL = "LOGIN_PAGE_SET_EMAIL";
export const LOGIN_PAGE_SET_PASSWORD = "LOGIN_PAGE_SET_PASSWORD";
export const LOGIN_PAGE_SET_NAME = "LOGIN_PAGE_SET_NAME";
export const LOGIN_PAGE_SET_OFFICER = "LOGIN_PAGE_SET_OFFICER";
export const LOGIN_PAGE_SET_ERR_MSG = "LOGIN_PAGE_SET_ERR_MSG";
export const LOGIN_PAGE_SET_REDIRECT = "LOGIN_PAGE_SET_REDIRECT";

export const loginPageSetOpen = (open) => {
  return {
    type: LOGIN_PAGE_SET_OPEN,
    payload: open,
  };
};

export const loginPageSetEmail = (email) => {
  return {
    type: LOGIN_PAGE_SET_EMAIL,
    payload: email,
  };
};

export const loginPageSetPassword = (password) => {
  return {
    type: LOGIN_PAGE_SET_PASSWORD,
    payload: password,
  };
};

export const loginPageSetName = (name) => {
  return {
    type: LOGIN_PAGE_SET_NAME,
    payload: name,
  };
};

export const loginPageSetOfficer = (officer) => {
  return {
    type: LOGIN_PAGE_SET_OFFICER,
    payload: officer,
  };
};

export const loginPageSetErrMsg = (errMsg) => {
  return {
    type: LOGIN_PAGE_SET_ERR_MSG,
    payload: errMsg,
  };
};

export const loginPageSetRedirect = (redirect) => {
  return {
    type: LOGIN_PAGE_SET_REDIRECT,
    payload: redirect,
  };
};

// SidebarLeft Actions

export const SIDEBAR_LEFT_SET_ACTIVE_ITEM = "SIDEBAR_LEFT_SET_ACTIVE_ITEM";
export const SIDEBAR_LEFT_SET_NAME = "SIDEBAR_LEFT_SET_NAME";

export const sidebarLeftSetActiveItem = (activeItem) => {
  return {
    type: SIDEBAR_LEFT_SET_ACTIVE_ITEM,
    payload: activeItem,
  };
};

export const sidebarLeftSetName = (name) => {
  return {
    type: SIDEBAR_LEFT_SET_NAME,
    payload: name,
  };
};

// SidebarRight Actions

export const SIDEBAR_RIGHT_SET_COMPONENT = "SIDEBAR_RIGHT_SET_COMPONENT";

export const sidebarRightSetComponent = (component) => {
  return {
    type: SIDEBAR_RIGHT_SET_COMPONENT,
    payload: component,
  };
};

// SoldierManager Actions

export const SOLDIER_MANAGER_SET_ARR = "SOLDIER_MANAGER_SET_ARR";

export const soldierManagerSetArr = (arr) => {
  return {
    type: SOLDIER_MANAGER_SET_ARR,
    payload: arr,
  };
};

// Roll Actions

export const ROLL_SET_ARR = "ROLL_SET_ARR";
export const ROLL_SET_TIME = "ROLL_SET_TIME";
export const ROLL_SET_START = "ROLL_SET_START";
export const ROLL_RENDER = "ROLL_RENDER";

export const rollSetArr = (arr) => {
  return {
    type: ROLL_SET_ARR,
    payload: arr,
  };
};

export const rollSetTime = (time) => {
  return {
    type: ROLL_SET_TIME,
    payload: time,
  };
};

export const rollSetStart = (start) => {
  return {
    type: ROLL_SET_START,
    payload: start,
  };
};

export const rollRender = () => {
  return {
    type: ROLL_RENDER,
    payload: undefined,
  };
};

// Phone Actions

export const PHONE_SET_ARR = "PHONE_SET_ARR";

export const phoneSetArr = (arr) => {
  return {
    type: PHONE_SET_ARR,
    payload: arr,
  };
};

// DeleteSoldier Actions

export const DELETE_SOLDIER_SET_OPEN = "DELETE_SOLDIER_SET_OPEN";
export const DELETE_SOLDIER_SET_NAME = "DELETE_SOLDIER_SET_NAME";
export const DELETE_SOLDIER_SET_MILITARY_NUMBER =
  "DELETE_SOLDIER_SET_MILITARY_NUMBER";

export const deleteSoldierSetOpen = (open) => {
  return {
    type: DELETE_SOLDIER_SET_OPEN,
    payload: open,
  };
};

export const deleteSoldierSetName = (name) => {
  return {
    type: DELETE_SOLDIER_SET_NAME,
    payload: name,
  };
};

export const deleteSoldierSetMilitaryNumber = (military_number) => {
  return {
    type: DELETE_SOLDIER_SET_MILITARY_NUMBER,
    payload: military_number,
  };
};

// RegisterSoldier Actions

export const REGISTER_SOLDIER_SET_OPEN = "REGISTER_SOLDIER_SET_OPEN";
export const REGISTER_SOLDIER_SET_NAME = "REGISTER_SOLDIER_SET_NAME";
export const REGISTER_SOLDIER_SET_MILITARY_NUMBER =
  "REGISTER_SOLDIER_SET_MILITARY_NUMBER";

export const registerSoldierSetOpen = (open) => {
  return {
    type: REGISTER_SOLDIER_SET_OPEN,
    payload: open,
  };
};

export const registerSoldierSetName = (name) => {
  return {
    type: REGISTER_SOLDIER_SET_NAME,
    payload: name,
  };
};

export const registerSoldierSetMilitaryNumber = (military_number) => {
  return {
    type: REGISTER_SOLDIER_SET_MILITARY_NUMBER,
    payload: military_number,
  };
};
