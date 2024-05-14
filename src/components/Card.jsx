import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BsCartXFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";
import {AddtoCart} from "./AddtoCart";

function Toasteffect(message) {
  toast(`${message} successfully !!!`);
}
function Card({ title, description, imgUrl ,defaultvalue=true}) {
  const [liked, setLiked] = useState("white");
  

    const Like = () => {
      setLiked((prev) => (prev == "white" ? "red" : "white"));

      if (liked == "white") Toasteffect("Liked");
      else Toasteffect("Unliked");
    };
  return (
    // <div className='w-[300px] gap-5 border relative border-[black] flex flex-col place-items-center'>
    //     <img  className="w-[100%] object-cover"  src={`${imgUrl}`} alt="" />
    //     <FaCartPlus size={32} color='blue' className=' cursor-pointer absolute top-[8rem] left-[16rem]' />

    //    <div className='flex place-items-center justify-center w-[100%] gap-[2rem] '><h2>{title}</h2>
    //    <MdShoppingCart size={36}  />
    //    </div>
    //     <p>{description}</p>
    // </div>
    <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="flex flex-col justify-between object-cover object-center"
        src={imgUrl}
        alt="card"
      />
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={Like}
            className="flex items-center text-gray-700 font-bold text-sm focus:outline-none"
          >
            <FaThumbsUp color={liked} className="mr-1" /> Like
          </button>
          <AddtoCart  title={title} defaultvalue={defaultvalue} />
        </div>
      </div>
    </div>
  );
}

export default Card;
