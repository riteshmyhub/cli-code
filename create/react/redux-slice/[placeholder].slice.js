import { createSlice } from "@reduxjs/toolkit";
import PlaceHolderService from "../services/placeholder.service";

const initialState = {
   PlaceHolderLoading: true,
   data: [],
   error: null,
};

export const PlaceHolderSlice = createSlice({
   name: "PlaceHolder",
   initialState,
   reducers: {},
   extraReducers() {
      let { _testApi } = new PlaceHolderService();

      builder.addCase(_testApi.pending, (state) => {
         state.PlaceHolderLoading = true;
      });
      builder.addCase(_testApi.fulfilled, (state, action) => {
         state.PlaceHolderLoading = false;
         state.data = action.payload;
         state.error = null;
      });
      builder.addCase(_testApi.rejected, (state, action) => {
         state.PlaceHolderLoading = false;
         state.data = [];
         state.error = action.payload;
      });
   },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
