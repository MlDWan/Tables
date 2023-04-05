import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAllWorkers,
  requestCreateWorker,
  requestToChangeWorker,
  requestToDeleteWorker,
  requestWorker,
} from "../../axios/request/worker";

export const getAllWorkers = createAsyncThunk(
  "workers",
  async (data, { rejectWithValue }) => {
    try {
      return await requestAllWorkers(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const getWorker = createAsyncThunk(
  "worker",
  async (data, { rejectWithValue }) => {
    try {
      console.log(await requestWorker(data));
      return await requestWorker(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const createWorker = createAsyncThunk(
  "worker-create",
  async (data, { rejectWithValue }) => {
    try {
      await requestCreateWorker(data);
      return await requestAllWorkers({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteWorker = createAsyncThunk(
  "worker-delete",
  async (data, { rejectWithValue }) => {
    try {
      await requestToDeleteWorker(data);
      return await requestAllWorkers({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const changeWorker = createAsyncThunk(
  "worker-change",
  async (data, { rejectWithValue }) => {
    try {
      await requestToChangeWorker(data);
      return await requestAllWorkers(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
