import React,{useEffect,useState} from 'react'
import { Card, CardBody, CardFooter,Button,GridItem,Grid,Image,Text,Spacer } from '@chakra-ui/react'
import {useDispatch,useSelector} from 'react-redux'
import {Add} from '../Store/ProductSlice'

const Home = () => {
  
  const [productsInfo, setProductsInfo] = useState([])
  console.log(productsInfo)
  
  const dispatch=useDispatch();

  const items=useSelector((state)=>{
    return state.product
  })

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

    if(productsInfo.length===0){
      return <h1>Loading......</h1>
    }

  
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
                <CardFooter><Button onClick={()=>{AddItem(curr)}}>Add to Cart</Button>
                <Spacer/>
                <Button mr='20px'>{'$ '+ curr.price}</Button>
                <Button>
                {(items.filter((ele)=>{
                           return (ele.id===curr.id)
                })).length} 
                </Button>
                </CardFooter>
                </Card>

            </GridItem>
                )
            })} 
          </Grid>
          
    </>
  )
}

export default Home