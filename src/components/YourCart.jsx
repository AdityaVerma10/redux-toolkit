import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { userCartData } from '../feature/CartSlice';
import { useNavigate } from 'react-router-dom';

import Card from "./Card"

function YourCart() {
      const [cartdat ,setCartdata] =useState([]);
      // setCartdata(useSelector(state=>state.cartdata))
      let d =useSelector(state=>state.auth)
      const Navigate =useNavigate();
      console.log(d)
  const id =()=>{
    return Date.now() * Math.random() * Math.random();
  }
  return (
    <>
    <div className='flex flex-wrap gap-8 justify-center '>
      {
        userCartData.map((item)=>(
         
             <Card key={id()} title={item.title} description={item.description} imgUrl={item.image.url} defaultvalue={false}/>
        
      
        ))
      }
      
    </div>
          <button className='w-[200px] self-center' onClick={()=>{
            Navigate("/")
          }}>Back To Courses</button>
          </>
  )
}

export default YourCart