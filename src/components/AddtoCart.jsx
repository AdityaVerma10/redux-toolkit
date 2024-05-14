import { useId, useRef, useState,useEffect } from "react";
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartXFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { addcart, setData,removecart } from "../feature/CartSlice";



function AddtoCart({ title, defaultvalue =true}) {  
  const [cart, setCart] = useState(defaultvalue);
 
  const dispatch =useDispatch();
  const userCartData =useSelector(state=>state.auth.cartdata)

  useEffect(()=>{
    userCartData.map((item)=>{
      if(item.title==title) setCart(false)
    })
  },[])
  const handleCarts = (e) => {
    let flag =false;
    setCart((prev) => {
   
      if(prev){
        const d =dispatch(addcart(title))

        console.log(d.payload);
        console.log(userCartData)
 
      }
      else{
        const d=dispatch(removecart(title))
   
        console.log(d.payload)
        console.log(userCartData)
      }
 
      return !prev;
    });

  };
  return (
    <button
      onClick={handleCarts}
      className="addtocartbtn flex items-center px-3 py-1 bg-gray-900 text-white font-bold rounded"
    >
      <AiOutlineShoppingCart className="mr-1" />
      {cart ? "Add to Cart" : "Remove from Cart"}
 
    </button>
  );
}

export { AddtoCart }

