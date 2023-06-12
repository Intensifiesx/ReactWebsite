// Description: This is where the games and the  
// react backend showcase will be

// Import our components
<<<<<<< HEAD
=======
import Skull from "../Images/Skull.png";
>>>>>>> c9ab15ac1cd4fbab06b4bd00cb64e03367a70113
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
<<<<<<< HEAD
      <div className="bottom-text" style={{marginBottom:"-290px", backgroundColor:"black", color:"white", padding:"15px"}}>
=======
      <div className="bottom-text" style={{marginBottom:"-290px", backgroundColor:"black", color:"white", padding:"10px"}}>
        <img src={Skull} alt="Skull" width="50px" height="50px" style={{position:"relative", right: "10px"}}/>
>>>>>>> c9ab15ac1cd4fbab06b4bd00cb64e03367a70113
        ©2023 Made by Silvia and Zain
      </div>
    </>
  );
}
