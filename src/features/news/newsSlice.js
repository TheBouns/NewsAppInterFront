import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  article: {},
  isLoading: false,
};

export const getAll = createAsyncThunk("news/getAll", async () => {
  try {
    return await newsService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const getAllArchived = createAsyncThunk("news/archive", async () => {
  try {
    return await newsService.getAllArchived();
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
export const deleteArticle = createAsyncThunk("news/delete", async (id) => {
  try {
    return await newsService.deleteArticle(id);
  } catch (error) {
    console.error(error);
  }
});
export const getArticleByTitle = createAsyncThunk(
  "news/find",
  async (title) => {
    try {
      return await newsService.getArticleByTitle(title);
    } catch (error) {
      console.error(error);
    }
  }
);
export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getAll.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllArchived.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getAllArchived.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createArticle.fulfilled, (state, action) => {
      state.news = [action.payload.newArticle, ...state.news];
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
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      const articleDelete = state.news.map((element) => {
        if (element._id === action.payload._id) {
          element = action.payload;
        }
        return element;
      });
      state.news = articleDelete;
    });
    builder.addCase(getArticleByTitle.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const { reset } = newsSlice.actions;
export default newsSlice.reducer;
