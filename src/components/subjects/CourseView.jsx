import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchDataById } from "../../../redux/subjectSlice";

function CourseView() {


    const {id}=useParams()
    const { datas,dataById, loading } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const navigate=useNavigate()
  
    useEffect(() => {
      const fn = () => {
        dispatch(fetchDataById({id}));
      };
      fn();
    }, []);
    console.log(dataById, "tfyghuijklm;");
    console.log(datas, "tfyghuijklm;");
  return (
    <div className="pl-[20px] pr-[20px] pt-[20px]">
   
   
  <div className=" ">
  <h1 className="text-3xl ml-[10px]">LEVEL1</h1>
   <div className="w-[100%] h-[500px] overflow-y-scroll m-10px bg-violet-200  mt-[20px]">
   {
        dataById.map((item,i)=>(
            <div className="w-[100%] h-[200px]  flex justify-around items-center  mt-[20px] bg-violet-400  " onClick={()=>{
                navigate(`/videos/${item.id}`)
            }}>
      <div className="w-[30%] h-[100%] grid place-content-center ">
        <div className="bg-violet-300  w-[50px] h-[50px]     rounded-[100%]  ml-[10px]   ">
          <div className=" w-[50px] h-[50px] p-[5px] rounded-[100%] bg-violet-500 grid place-content-center  ">
            {i+1}

          </div>
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-[10px] place-content-center place-items-center text-white  h-[100%] ">
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <h1 className="text-amber-200">{item.title}</h1>
      </div>
      <div className="w-[30%] grid place-content-center ">
        <i
          class="fa-solid fa-chevron-right fa-2xl"
          style={{ color: "#ffffff", marginRight: "10px" }}
        ></i>
      </div>
    </div>
        ))
    }
   </div>
  </div>
</div>
  );
}

export default CourseView;
