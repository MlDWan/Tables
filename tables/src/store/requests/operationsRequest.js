import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAllOperations,
  requestCreateOperation,
  requestOperation,
  requestToChangeOperation,
  requestToDeleteOperation,
} from "../../axios/request/operation";

export const getAllOps = createAsyncThunk(
  "op/getAll",
  async (data, { rejectWithValue }) => {
    try {
      return await requestAllOperations(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const getOp = createAsyncThunk(
  "get-op",
  async (data, { rejectWithValue }) => {
    try {
      return await requestOperation(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const createOp = createAsyncThunk(
  "op-create",
  async (data, { rejectWithValue }) => {
    try {
      await requestCreateOperation(data);
      return await requestAllOperations({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteOp = createAsyncThunk(
  "op-delete",
  async (data, { rejectWithValue }) => {
    try {
      await requestToDeleteOperation(data);
      return await requestAllOperations({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const changeOp = createAsyncThunk(
  "op-change",
  async (data, { rejectWithValue }) => {
    try {
      await requestToChangeOperation(data);
      return await requestAllOperations(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
