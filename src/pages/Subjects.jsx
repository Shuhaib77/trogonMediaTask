import React from 'react'
import Header from '../components/Header'
import CourseDetail from '../components/subjects/CourseDetail'
import CourseView from '../components/subjects/CourseView'
import Chapter from './Chapter'
import { useParams } from 'react-router-dom'

function Subjects() {
    
    
  return (
    <div className='bg-violet-500 h-[100vh]'>
        <div>
            <Header heading={"SUBJECT"}/>
        </div>
        <div>
            <CourseDetail/>
        </div>
        <div>
            <CourseView/>
        </div>
      
         
    </div>
  )
}

export default Subjects