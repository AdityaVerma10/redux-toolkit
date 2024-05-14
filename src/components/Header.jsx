import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Header({carts}) {
  let userCartLength =useSelector(state=>state.auth.cartdata.length)
  return (
    <div className='flex  justify-between w-[80vw]  h-fit'>
    <h1 className=' text-[3rem]'>Top Courses</h1>
    <div className=' relative'>
      <Link to={"/your-cart"} className=' text-white'>
      <button>Your Cart</button>
      </Link>
      <p className=' absolute left-[5.8rem] bottom-[1.5rem]'>{userCartLength}</p>
    </div>
  </div>
  )
}

export default Header