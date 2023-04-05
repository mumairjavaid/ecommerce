import React from 'react'
import { Card, CardBody, CardFooter,Button,GridItem,Grid,Image,Text } from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import {Remove} from '../Store/ProductSlice'

const Cart = () => {
    
    const items=useSelector((state)=>{
        return state.product
      })
      console.log(items)

    const dispatch=useDispatch();

    const RemoveItem=(value)=>{
        dispatch(Remove(value))
      }

    
    
      return (
    <>
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p='20px' mb='20px' bg='gray.200' >
        {   
        items.map((curr)=>{
            return(
            <GridItem w='100%' h='100px' key={curr.id} mb='140px' style={{textAlign:'center'}} >
                <Card >
                <CardBody>
                <Image src={curr.image} w='100px' h='100px' margin='auto' />
                <Text>{curr.title.length>20?curr.title.substring(0,20):curr.title}</Text>
                </CardBody>
                <CardFooter><Button onClick={()=>{RemoveItem(curr.id)}}><Text style={{color:'red'}}>Delete Item</Text></Button></CardFooter>
                </Card>
            </GridItem>
                )
            })} 
          </Grid>

    </>
  )
}

export default Cart