import React,{useEffect,useState} from 'react'
import { Card, CardBody, CardFooter,Button,GridItem,Grid,Image,Text } from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {Add} from '../Store/ProductSlice'

const Home = () => {
  
  const [productsInfo, setProductsInfo] = useState([])
  
  const dispatch=useDispatch();

  const AddItem=(value)=>{

    dispatch(Add(value))


  }
    const products=async ()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    setProductsInfo(data);

  }
    useEffect(() => {
    products();
    }, []);

  
    return (
    <>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} p='20px' mb='20px' bg='gray.200' >
        { productsInfo.map((curr)=>{
            return(
            <GridItem w='100%' h='100px' key={curr.id} mb='140px' style={{textAlign:'center'}} >
                <Card >
                <CardBody>
                <Image src={curr.image} w='100px' h='100px' margin='auto' />
                <Text>{curr.title.length>20?curr.title.substring(0,20):curr.title}</Text>
                </CardBody>
                <CardFooter><Button onClick={()=>{AddItem(curr)}}>Add to Cart</Button></CardFooter>
                </Card>
            </GridItem>
                )
            })} 
          </Grid>
    </>
  )
}

export default Home