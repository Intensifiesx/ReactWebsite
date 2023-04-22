import React, { useState } from "react";
import PlayerStats from "./SubCategories/PlayerStats";
import Habits from "./SubCategories/Habits";
import Dailies from "./SubCategories/Dailies";
import Todos from "./SubCategories/Todos";
import Rewards from "./SubCategories/Rewards";
import Skull from "../Images/Skull.png";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export default function Main() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);
  return (
    <>
    <Card>
      <CardBody>
      <PlayerStats />
      <Habits todos={todos} />
      <Dailies />
      <Todos />
      <Rewards />
      </CardBody>
    </Card>
      
      <div className="bottom-text">
        <img src={Skull} alt="Skull" width="50px" height="50px" />© 2023 Made by
        Silvia and Zain
      </div>
    </>
  );
}
