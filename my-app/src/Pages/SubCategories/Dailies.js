import React from "react";
import "../../color.css";
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Heading,
  Stack,
  StackDivider,
  Box,
  Button,
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
  Checkbox,
 } from '@chakra-ui/react'


export default function Dailies() {
  return (
    <section className="sectionShowcase">
      <Card className="dailies textarea-wrap" height='500px'>
        <CardHeader>
        <Heading size='lg' height='10' className="header-left" >Dailies</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <InputGroup size='md'>
              <Input 
                pr='4.5rem'
                type="text" 
                placeholder="New Daily" 
                width='180px'
                />
              <InputRightElement width='4.5'>
                <Button className="clean-button">+</Button>
              </InputRightElement>
              </InputGroup>
            </Box>
            <Box>
                <input type="checkbox" />
                Productive work
            </Box>
            <Box>
              <label>
                <input type="checkbox"/>
                Productive work
              </label>
            </Box>
            <Box>
              <label>
                <input type="checkbox" />
                Read
              </label>
            </Box>
          </Stack>
        </CardBody>

      </Card>
    </section>
  );
}
