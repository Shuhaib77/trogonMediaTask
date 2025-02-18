import React from "react";
import { useNavigate } from "react-router-dom";

function Header({heading}) {
    const navigate=useNavigate()
  return (
    <div>
      <div className="bg-violet-500 h-[70px] w-[100%] p-[20px] ">
        <div className="float-left cursor-pointer ">
          <i
            class="fa-regular fa-circle-left fa-xl "
            style={{ color: "#ffffff" }}
            onClick={()=>{
                navigate(-1)
            }}
            

          ></i>
        </div>
        <h1 className="text-center text-white font-bold text-4xl">{heading}</h1>
      </div>
    </div>
  );
}

export default Header;
