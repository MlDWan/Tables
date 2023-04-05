import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAllOwners,
  requestCreateOwner,
  requestOwner,
  requestToChangeOwner,
  requestToDeleteOwner,
} from "../../axios/request/owner";

export const getAllOwners = createAsyncThunk(
  "owner",
  async (data, { rejectWithValue }) => {
    try {
      return await requestAllOwners(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
export const createOwner = createAsyncThunk(
  "owner-create",
  async (data, { rejectWithValue }) => {
    try {
      await requestCreateOwner(data);
      return await requestAllOwners({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteOwner = createAsyncThunk(
  "owner-delete",
  async (data, { rejectWithValue }) => {
    try {
      await requestToDeleteOwner(data);
      return await requestAllOwners({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const changeOwner = createAsyncThunk(
  "owner-change",
  async (data, { rejectWithValue }) => {
    try {
      await requestToChangeOwner(data);
      return await requestAllOwners({});
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const getOwner = createAsyncThunk(
  "get-owner",
  async (data, { rejectWithValue }) => {
    try {
      return await requestOwner(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
