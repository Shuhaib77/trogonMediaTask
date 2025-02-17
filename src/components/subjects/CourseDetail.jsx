import React, { useEffect } from 'react'
import { fetchData } from '../../../redux/subjectSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CourseDetail() {

    const {id}=useParams()
    const { datas, loading } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const navigate=useNavigate()
  
    useEffect(() => {
      const fn = () => {
        dispatch(fetchData());
      };
      fn();
    }, []);
    const courseData=datas.filter((item,i)=>item.id==id)
    console.log(datas, "tfyghuijklm;");
    console.log(courseData, "yyyyy;");
    console.log(id,"uuuuu");
  return (
    <div className='pl-[20px] pr-[20px] w-[100%] '>
        {
            courseData.map((item,i)=>(
                <div className='w-[100%] h-[200px] bg-[#ffffffe1]  grid place-content-center place-items-center gap-y-5 ' >
            <h1 className='text-4xl font-bold'>{item.title}</h1>
            <h1 className='font-semibold'>{item.description}</h1>
            <button className='p-3 w-200px bg-violet-500 rounded-lg'>Browse other course</button>
         </div>
            ))
        }
         
    </div>
  )
}

export default CourseDetail