import { configureStore } from "@reduxjs/toolkit";
import subjectSlice from './subjectSlice'
const store=configureStore({
    reducer:{
        data:subjectSlice
    }
})

export default store