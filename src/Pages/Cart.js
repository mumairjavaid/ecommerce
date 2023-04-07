import React from 'react'
import { Card, CardBody, CardFooter,Button,GridItem,Grid,Image,Text,Flex } from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import {Remove} from '../Store/ProductSlice'
import { TAXES } from '../Constants'
import {Decimal} from 'decimal.js'

const Cart = () => {
    
    const items=useSelector((state)=>{
        return state.product
      })

      
    const dispatch=useDispatch();

    const RemoveItem=(value)=>{
        dispatch(Remove(value))
      }
      let subtotal = items.reduce((total,element)=> total.add(element.price)
      ,new Decimal(0))
      
      let gst = subtotal.mul(TAXES.gst).toFixed(2);
      let delivery_fee = subtotal.mul(TAXES.delivery);

    if(items.length === 0){
      return <div>Your cart is empty!</div>
    }
    
// const x = 70;
// const y = 90;

// const xDecimal = new Decimal(x);
// const yDecimal = new Decimal(y).add(xe);

// const resultDecimal = xDecimal.add(yDecimal);


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
                <CardFooter><Button onClick={()=>{RemoveItem(curr.id)}}><Text style={{color:'red'}}>Delete Item</Text>
                </Button>
                <Button ml='20px'>{'$ '+ curr.price}</Button>
                </CardFooter>
                </Card>
            </GridItem>
                )
            })} 
          </Grid>
          <Flex alignItems='center' justifyContent='center' flexDirection='column'>
          <Text fontWeight='bold'>GST</Text>
          <Button>{'$ '+ gst}</Button>
          <Text fontWeight='bold'>Delivery Fee</Text>
          <Button>{'$ '+ delivery_fee.toFixed(2)}</Button>
          <Text fontWeight='bold'>SubTotal</Text>
          <Button>{'$ '}{subtotal.add(gst).add(delivery_fee).toFixed(2)}</Button>
          </Flex>

    </>
  )
}

export default Cart