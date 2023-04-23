// Description: This is where the games and the  
// react backend showcase will be

// Import our components
import Skull from "../Images/Skull.png";
import Todos from "./Components/Todos";
import Habits from "./Components/Habits";
import Dailies from "./Components/Dailies";
import Rewards from "./Components/Rewards";
import PlayerStats from "./Components/PlayerStats";

// Import libraries
import React, { useState } from "react";

export default function Main() {
  const [todos] = useState(["Todo 1", "Todo 2", "Todo 3"]);

  // Get the components of the showcase page
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
