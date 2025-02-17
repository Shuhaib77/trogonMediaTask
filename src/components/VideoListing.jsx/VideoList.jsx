import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDataById, fetchVideoById } from "../../../redux/subjectSlice";

function VideoList() {
  const { url } = useParams();

  console.log(url, "uiuu");

  const { datas, dataById, loading, videoById } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => {
      dispatch(fetchVideoById({ url }));
    };
    fn();
  }, []);

  console.log(videoById, "kkkkkk");
 
  // const videoData=dataById.filter((item,i)=>item.id==url)
  // console.log(videoData, "tfyghuijklm;");
  // console.log(url, "tfyghuijklm;");
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="bg-violet-700">
        {videoById?.map((item, i) => (
          <div className="pl-[30px] pr-[30px] pt-[20px]">
            <h1 className="text-white font-bold ">step-{i + 1}</h1>
            <h1 className="pl-[5px] text-yellow-50 text-center">{item?.title}</h1>
            <div
              className="bg-violet-400 shadow-md mt-[20px]"
              onClick={() => {
                navigate(`/stream/${item?.id}`);
              }}
            >
              <div className="w-[100%] lg:h-[200px] sm:h-[100%]  flex justify-around items-center  mt-[20px] ">
                <div className="w-[30%] h-[100%] grid place-content-center ">
                  <div className="bg-violet-300   h-full     rounded-[100%] p-[5px]  ml-[10px]   ">
                    <div className=" w-[50px] h-[50px] p-[5px] rounded-[100%] bg-violet-500 grid place-content-center  ">
                      2
                    </div>
                  </div>
                </div>
                <div className="w-[40%] flex flex-col gap-[10px] place-content-center place-items-center text-white  h-[100%] ">
                  <h1>{item?.title}</h1>
                  <h1 className="text-center">{item?.description}</h1>
                </div>
                <div className="w-[30%] grid place-content-center ">
                  <i
                    class="fa-solid fa-chevron-right fa-2xl"
                    style={{ color: "#ffffff", marginRight: "10px" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoList;
