import React from "react";
import DataRow from "../components/MainPage/SidebarRight/DataRow";

const fetch = require("node-fetch");

export const soldierManagerGetArr = async () => {
  let res = await fetch("http://18.219.142.74:8081/database/user", {
    method: "GET",
    credentials: "include",
  });

  if (res.ok) {
    let data = await res.json();
    let data_arr = data.map((info) => (
      <DataRow
        name={info.name}
        military_number={info.military_number}
        phone_out={info.phone_out}
        phone_in={info.phone_in}
        roll={info.roll}
        key={info.military_number}
      />
    ));
    return data_arr;
  } else {
    return [];
  }
};

export const parser = (sql_time) => {
  let time = sql_time.split(".")[0].replace("T", " ");
  return time;
};

export const rollGetArr = async (time, start) => {
  let res = await fetch("http://18.219.142.74:8081/database/user", {
    method: "GET",
    credentials: "include",
  });
  console.log("rollGetArr");
  if (res.ok) {
    let data = await res.json();
    let data_arr = data.map((info) => {
      let state = "normal";

      info.phone_out = parser(info.phone_out);
      info.phone_in = parser(info.phone_in);
      info.roll = parser(info.roll);

      if (start) {
        let start_time = time.getTime();
        let roll_time = new Date(info.roll).getTime();
        state = roll_time >= start_time ? "positive" : "negative";
      }

      return (
        <DataRow
          name={info.name}
          military_number={info.military_number}
          phone_out={info.phone_out}
          phone_in={info.phone_in}
          roll={info.roll}
          key={info.military_number}
          state={state}
        />
      );
    });
    return data_arr;
  } else {
    return [];
  }
};

export const validPhoneInTime = (phone_in, phone_out) => {
  let today = new Date();
  phone_in = new Date(phone_in);
  phone_out = new Date(phone_out);
  if (
    phone_out.getFullYear() === today.getFullYear() &&
    phone_out.getMonth() === today.getMonth() &&
    phone_out.getDay() === today.getDay() &&
    phone_in.getFullYear() === today.getFullYear() &&
    phone_in.getMonth() === today.getMonth() &&
    phone_in.getDay() === today.getDay() &&
    18 <= phone_in.getHours() &&
    phone_in.getHours() <= 21
  ) {
    return true;
  } else {
    return false;
  }
};

export const phoneGetArr = async () => {
  let res = await fetch("http://18.219.142.74:8081/database/user", {
    method: "GET",
    credentials: "include",
  });

  if (res.ok) {
    let data = await res.json();
    let data_arr = data.map((info) => {
      let state = "normal";

      info.phone_out = parser(info.phone_out);
      info.phone_in = parser(info.phone_in);
      info.roll = parser(info.roll);

      state = validPhoneInTime(info.phone_in, info.phone_out)
        ? "positive"
        : "negative";

      return (
        <DataRow
          name={info.name}
          military_number={info.military_number}
          phone_out={info.phone_out}
          phone_in={info.phone_in}
          roll={info.roll}
          key={info.military_number}
          state={state}
        />
      );
    });
    return data_arr;
  } else {
    return [];
  }
};
