// import React from "react";
import {
  LOGIN_PAGE_SET_OPEN,
  LOGIN_PAGE_SET_EMAIL,
  LOGIN_PAGE_SET_PASSWORD,
  LOGIN_PAGE_SET_NAME,
  LOGIN_PAGE_SET_OFFICER,
  LOGIN_PAGE_SET_ERR_MSG,
  LOGIN_PAGE_SET_REDIRECT,
  SIDEBAR_LEFT_SET_ACTIVE_ITEM,
  SIDEBAR_LEFT_SET_NAME,
  SIDEBAR_RIGHT_SET_COMPONENT,
  SOLDIER_MANAGER_SET_ARR,
  ROLL_SET_ARR,
  ROLL_SET_TIME,
  ROLL_SET_START,
  ROLL_RENDER,
  PHONE_SET_ARR,
  DELETE_SOLDIER_SET_OPEN,
  DELETE_SOLDIER_SET_NAME,
  DELETE_SOLDIER_SET_MILITARY_NUMBER,
  REGISTER_SOLDIER_SET_OPEN,
  REGISTER_SOLDIER_SET_NAME,
  REGISTER_SOLDIER_SET_MILITARY_NUMBER,
} from "../actions";
import { combineReducers } from "redux";

const loginPage = (
  state = {
    open: false,
    email: "",
    password: "",
    officer: false,
    errMsg: "",
    redirect: false,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_PAGE_SET_OPEN:
      return { ...state, open: action.payload };
    case LOGIN_PAGE_SET_EMAIL:
      return { ...state, email: action.payload };
    case LOGIN_PAGE_SET_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_PAGE_SET_NAME:
      return { ...state, name: action.payload };
    case LOGIN_PAGE_SET_OFFICER:
      return { ...state, officer: action.payload };
    case LOGIN_PAGE_SET_ERR_MSG:
      return { ...state, errMsg: action.payload };
    case LOGIN_PAGE_SET_REDIRECT:
      return { ...state, redirect: action.payload };
    default:
      return state;
  }
};

const sidebarLeft = (
  state = { activeItem: "SoldierManager", name: "" },
  action
) => {
  switch (action.type) {
    case SIDEBAR_LEFT_SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    case SIDEBAR_LEFT_SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const sidebarRight = (state = { component: "SoldierManager" }, action) => {
  switch (action.type) {
    case SIDEBAR_RIGHT_SET_COMPONENT:
      return { ...state, component: action.payload };
    default:
      return state;
  }
};

const soldierManager = (state = { arr: "" }, action) => {
  switch (action.type) {
    case SOLDIER_MANAGER_SET_ARR:
      return { ...state, arr: action.payload };
    default:
      return state;
  }
};

const roll = (
  state = { arr: [], time: "", start: false, render: undefined },
  action
) => {
  switch (action.type) {
    case ROLL_SET_ARR:
      return { ...state, arr: action.payload };
    case ROLL_SET_TIME:
      return { ...state, time: action.payload };
    case ROLL_SET_START:
      return { ...state, start: action.payload };
    case ROLL_RENDER:
      return { ...state, render: Date.now() };
    default:
      return state;
  }
};

const phone = (state = { arr: "" }, action) => {
  switch (action.type) {
    case PHONE_SET_ARR:
      return { ...state, arr: action.payload };
    default:
      return state;
  }
};

const deleteSoldier = (
  state = { militaryNumber: "", name: "", open: false },
  action
) => {
  switch (action.type) {
    case DELETE_SOLDIER_SET_MILITARY_NUMBER:
      return { ...state, militaryNumber: action.payload };
    case DELETE_SOLDIER_SET_NAME:
      return { ...state, name: action.payload };
    case DELETE_SOLDIER_SET_OPEN:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};

const registerSoldier = (
  state = { militaryNumber: "", name: "", open: false },
  action
) => {
  switch (action.type) {
    case REGISTER_SOLDIER_SET_MILITARY_NUMBER:
      return { ...state, militaryNumber: action.payload };
    case REGISTER_SOLDIER_SET_NAME:
      return { ...state, name: action.payload };
    case REGISTER_SOLDIER_SET_OPEN:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  loginPage,
  sidebarLeft,
  sidebarRight,
  soldierManager,
  roll,
  phone,
  deleteSoldier,
  registerSoldier,
});

export default rootReducer;
