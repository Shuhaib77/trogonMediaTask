import React from 'react'
import ChapterView from '../components/chapter/ChapterView'
import Header from '../components/Header'

function Chapter() {
  return (
    <div className='bg-violet-500'>
         <div>
            <Header heading={"MODULE"}/>
        </div>
       <div>
       <ChapterView/>
       </div>
    </div>
  )
}

export default Chapter