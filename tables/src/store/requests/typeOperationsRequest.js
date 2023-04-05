import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAllOperationsTypes,
  requestCreateOperationType,
  requestOperationType,
  requestToChangeOperationType,
  requestToDeleteOperationType,
} from "../../axios/request/operationType";

export const getAllOpts = createAsyncThunk(
  "opt",
  async (data, { rejectWithValue }) => {
    try {
      return await requestAllOperationsTypes(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const getOpt = createAsyncThunk(
  "get-opt",
  async (data, { rejectWithValue }) => {
    try {
      return await requestOperationType(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const createOpt = createAsyncThunk(
  "create-opt",
  async (data, { rejectWithValue }) => {
    try {
      await requestCreateOperationType(data);
      return await requestAllOperationsTypes({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteOpt = createAsyncThunk(
  "opt-delete/",
  async (data, { rejectWithValue }) => {
    try {
      await requestToDeleteOperationType(data);
      return await requestAllOperationsTypes({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const changeOpt = createAsyncThunk(
  "opt-change/",
  async (data, { rejectWithValue }) => {
    try {
      await requestToChangeOperationType(data);
      return await requestAllOperationsTypes({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
