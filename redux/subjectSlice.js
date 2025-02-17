import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data", async () => {
  try {
    const res = await axios.get(
      "https://trogon.info/interview/php/api/subjects.php"
    );
    console.log(res.data);

    return res.data;
  } catch (error) {
    throw error;
  }
});
export const fetchDataById = createAsyncThunk("data/id", async ({id}) => {
    try {
      const res = await axios.get(
       ` https://trogon.info/interview/php/api/modules.php?subject_id=${id}`
      );
      console.log(res.data);
  
      return res.data;
    } catch (error) {
      throw error;
    }
  });


  export const fetchVideoById = createAsyncThunk("data/id/video", async ({id}) => {
    try {
      const res = await axios.get(
       ` https://trogon.info/interview/php/api/videos.php?module_id=${id}`
      );
      console.log(res.data);
  
      return res.data;
    } catch (error) {
      throw error;
    }
  });

const subjectSlice = createSlice({
  name: "subjectdata",
  initialState: {
    datas: [],
    dataById:[],
    videoById:[],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.datas = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = true;
      state.error = "fetching failed";
    });
    builder.addCase(fetchDataById.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchDataById.fulfilled, (state, action) => {
        state.loading = false;
        state.dataById = action.payload;
      });
      builder.addCase(fetchDataById.rejected, (state, action) => {
        state.loading = true;
        state.error = "fetching failed";
      });
      builder.addCase(fetchVideoById.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(fetchVideoById.fulfilled, (state, action) => {
        state.loading = false;
        state.videoById = action.payload;
      });
      builder.addCase(fetchVideoById.rejected, (state, action) => {
        state.loading = true;
        state.error = "fetching failed";
      });
  },
});

export default subjectSlice.reducer;
