import React, { useState } from "react";
import PlayerStats from "./SubCategories/PlayerStats";
import Habits from "./SubCategories/Habits";
import Dailies from "./SubCategories/Dailies";
import Todos from "./SubCategories/Todos";
import Rewards from "./SubCategories/Rewards";
import Skull from "../Images/Skull.png";


export default function Main() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);
  return (
    <>
      <PlayerStats />
      <Habits todos={todos} />
      <Dailies />
      <Todos />
      <Rewards />
      <div className="bottom-text">
        <img src={Skull} alt="Skull" width="50px" height="50px" />© 2023 Made by
        Silvia and Zain
      </div>
    </>
  );
}
