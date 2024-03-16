import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default class PlaceHolderService {
   constructor() {}

   _test = createAsyncThunk("_test", async (_, thunkAPI) => {
      try {
         const { data } = await axios.get("https://dummyjson.com/products");
         return data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
