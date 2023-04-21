import React from "react";
import PlayerStats from "./PlayerStats";
import Habits from "./Habits";
import Dailies from "./Dailies";
import Todos from "./Todos";
import Rewards from "./Rewards";

export default function Main() {
  return (
    <>
      <PlayerStats />
      <Habits />
      <Dailies />
      <Todos />
      <Rewards />
    </>
  );
}
