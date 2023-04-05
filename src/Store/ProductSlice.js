import { createSlice } from '@reduxjs/toolkit'


const ProductsSlice=createSlice({
    name:'products',
    initialState:[],
    reducers:{
        Add(state,action){
            state.push(action.payload)
        },
        Remove(state,action){
               return state.filter((curr)=>{
                return curr.id!==action.payload;
            }) 
        }
    }
    
})
export const {Add,Remove} = ProductsSlice.actions
export default ProductsSlice.reducer
