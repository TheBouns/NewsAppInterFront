import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  article: {},
  isloading: false,
};

export const getAll = createAsyncThunk("news/getAll", async () => {
  try {
    return await newsService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const createArticle = createAsyncThunk("news/create", async (data) => {
  try {
    return await newsService.createArticle(data);
  } catch (error) {
    console.error(error);
  }
});
export const archiveArticle = createAsyncThunk("news/update", async (id) => {
  try {
    return await newsService.archiveArticle(id);
  } catch (error) {
    console.error(error);
  }
});
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(createArticle.fulfilled, (state, action) => {
      state.news = [action.payload, ...state.news];
    });
    builder.addCase(archiveArticle.fulfilled, (state, action) => {
      const articleUpdate = state.news.map((element) => {
        if (element._id === action.payload._id) {
          element = action.payload;
        }
        return element;
      });
      state.news = articleUpdate;
    });
  },
});

export default newsSlice.reducer;
