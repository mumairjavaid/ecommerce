import React from 'react'
import { Heading,Flex,Button,Spacer,Text} from '@chakra-ui/react'
import {useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";

const App = () => {
    const items=useSelector((state)=>{
        return state.product
      })
  return (<>
    <Flex gap={10} alignItems='center' padding='10px 20px' >
    <Heading>Lootlo</Heading>
    <Spacer/>
    <Text fontWeight='bold'><NavLink to='/'>Home</NavLink></Text>
    <Text fontWeight='bold'><NavLink to='/cart'>Cart  {items.length}</NavLink></Text>
    <Button>Logout</Button>
    </Flex>
  </>
  )
}

export default App