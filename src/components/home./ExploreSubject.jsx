import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/subjectSlice";
import { useNavigate } from "react-router-dom";

function ExploreSubject() {
  const { datas, loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    const fn = () => {
      dispatch(fetchData());
    };
    fn();
  }, []);
  console.log(datas, "tfyghuijklm;");
  if (loading) return <p>Loading...</p>;

//   const handleClick=(id)=>{
//     navigate(`https://trogon.info/interview/php/api/modules.php?subject_id=${id}`)


//   }

  return (
    <>
      <div className="bg-gradient-to-b from-violet-200 to-white min-h-screen flex flex-col justify-center items-center gap-10 p-5">
        <div className="text-center ">
          <h2 className="text-5xl font-extrabold text-violet-800 drop-shadow-md ">
            Explore Courses
          </h2>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[800px] h-[600px] bg-white  rounded-lg shadow-lg overflow-auto ">
            <h1 className="text-center text-3xl font-semibold text-violet-500 mb-2 mt-2 flex justify-center sticky top-0 p-2 z-1   bg-white">
              <img
                src="https://pngimg.com/d/book_PNG51038.png"
                className="w-[50px] h-[50px] object-cover"
                alt=""
              />
              <h1>Trending Courses</h1>
            </h1>

           <div className="p-[30px] ">
           {datas.length===0? <h1 className="text-center">"data is empty"</h1>:datas?.map((item, i) => (
              <div className="w-full h-[150px] bg-gradient-to-r from-violet-300 to-violet-500 text-white rounded-2xl flex items-center mt-[10px]  shadow-md hover:scale-105 transition-transform" onClick={()=>{
                navigate(`/subject/${item?.id}`)
              }}>
                <div className="w-[100px] h-[100px] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-6 flex flex-col gap-2">
                  <h1 className="text-xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-200">
                  {item?.description}
                  </p>
                </div>
              </div>
            ))}
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreSubject;
