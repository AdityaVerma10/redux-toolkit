import {  createSlice} from "@reduxjs/toolkit";

export let userCartData =[];
export const initialState ={
    data:[],
    cartdata:[]
}
export  const  CartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data =action.payload;
            console.log(state.data)
        },
        addcart:(state,action)=>{
      
          state.cartdata =[...state.cartdata,...state.data.filter((item)=>item.title==action.payload)]
          userCartData =state.cartdata
            console.log(state.cartdata)
        },
        removecart:(state,action)=>{
            state.cartdata =state.cartdata.filter((item)=>item.title!=action.payload)
            console.log(state.cartdata)
          userCartData =state.cartdata

        }
    }
})

export const {setData,addcart,removecart} =CartSlice.actions


export default CartSlice.reducer

