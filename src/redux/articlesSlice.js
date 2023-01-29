import { createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./operations";

const initialValues = {
  articles: [],
  isLoading: true,
  error: "",
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});