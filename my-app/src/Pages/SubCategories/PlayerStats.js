import React from "react";
import { Progress, Stack } from '@chakra-ui/react'

export default function PlayerStats() {
  return (
    <>
      <div className="player">
        <h3>Player Stats</h3>
        <Stack spacing={2}>
          <Progress 
            colorScheme='red' 
            height='20px' 
            value={80} 
            width='100px' 
          />
          <Progress 
            colorScheme='yellow' 
            height='20px' 
            value={40} 
            width='100px'
          />
          <Progress 
            colorScheme='blue' 
            height='20px' 
            value={60} 
            width='100px'
          />
        </Stack>
      </div>
    </>
  );
}
