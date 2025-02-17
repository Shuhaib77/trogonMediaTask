import React from "react";

function Header({heading}) {
  return (
    <div>
      <div className="bg-violet-500 h-[70px] w-[100%] p-[20px] ">
        <div className="float-left ">
          <i
            class="fa-regular fa-circle-left fa-xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        <h1 className="text-center font-bold text-2xl">{heading}</h1>
      </div>
    </div>
  );
}

export default Header;
