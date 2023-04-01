import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAllFlats, requestCreateFlat, requestToDeleteFlat } from "../../axios/request/flat";

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
      return await requestCreateFlat(data);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);

export const deleteFlat = createAsyncThunk(
  "flat/",
  async (matter, { rejectWithValue }) => {
    try {
      return await requestToDeleteFlat(matter);
    } catch (e) {
      return rejectWithValue(e?.response?.data.message ?? "");
    }
  }
);
// export const changeStatus = createAsyncThunk<FullMatter[], ChangeMatter, { rejectValue: string }>(
//   'matter/changeStatus',
//   async (matter, { rejectWithValue }) => {
//     try {
//       return (await requestToChangeStatus(matter.id, matter.active)) as FullMatter[];
//     } catch (e: any) {
//       return rejectWithValue(e?.response?.data.message ?? '')
//     }
//   }
// );

// export const createNewOne = createAsyncThunk<FullMatter[], MatterCreation, { rejectValue: string }>(
//   'matter/create',
//   async (matter, { rejectWithValue }) => {
//     try {
//       return (await requestToCreate(matter)) as FullMatter[];
//     } catch (e: any) {
//       return rejectWithValue(e?.response?.data.message ?? '')
//     }
//   }
// );

// export const changeMatter = createAsyncThunk<FullMatter[], MatterChanging, { rejectValue: string }>(
//   'matter/change',
//   async (matter, { rejectWithValue }) => {
//     try {
//       return (await requestToChange(matter)) as FullMatter[];
//     } catch (e: any) {
//       return rejectWithValue(e?.response?.data.message ?? '')
//     }
//   }
// );
