import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAllFlats,
  requestCreateFlat,
  requestFlat,
  requestToChangeFlat,
  requestToDeleteFlat,
} from "../../axios/request/flat";

export const getAllFlats = createAsyncThunk(
  "flat/getAll",
  async (data, { rejectWithValue }) => {
    try {
      return await requestAllFlats(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const createFlat = createAsyncThunk(
  "flat",
  async (data, { rejectWithValue }) => {
    try {
      await requestCreateFlat(data);
      return await requestAllFlats({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteFlat = createAsyncThunk(
  "flat/",
  async (data, { rejectWithValue }) => {
    try {
      await requestToDeleteFlat(data);
      return await requestAllFlats({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const getFlat = createAsyncThunk(
  "get-flat",
  async (data, { rejectWithValue }) => {
    try {
      return await requestFlat(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const changeFlat = createAsyncThunk(
  "flat-change",
  async (data, { rejectWithValue }) => {
    try {
      await requestToChangeFlat(data);
      return await requestAllFlats({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
