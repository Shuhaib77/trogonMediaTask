import React from "react";

function ChapterView() {
  return (
    <div className="flex justify-center items-center h-[100vh] gap-x-[50px]">
   <div className="w-[70px] h-[70px] rounded-[100%] bg-violet-400 p-[10px]">
        <div className="w-full h-full bg-white rounded-[100%] grid place-content-center place-items-center">
      
        <i class="fa-solid fa-check fa-2xl" style={{color: "#d357fe"}}></i>
        </div>
      </div>
      {/* ---------- */}

      <div className="w-[70px] h-[70px] rounded-[100%] bg-violet-400 p-[10px]">
        <div className="w-full h-full bg-white rounded-[100%] grid place-content-center place-items-center">
      
        <i class="fa-solid fa-check fa-2xl" style={{color: "#d357fe"}}></i>
        </div>
      </div>
      {/* ---- */}

      <div className="w-[70px] h-[70px] rounded-[100%] bg-violet-400 p-[10px]">
        <div className="w-full h-full bg-white rounded-[100%] grid place-content-center place-items-center">
      
        <i class="fa-solid fa-check fa-2xl" style={{color: "#d357fe"}}></i>
        </div>
      </div>
    </div>
  );
}

export default ChapterView;
