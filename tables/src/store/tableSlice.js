import { createSlice } from "@reduxjs/toolkit";
import { dataTable } from "../tableData";
import { v4 as uuidv4 } from "uuid";
import {
  changeFlat,
  createFlat,
  deleteFlat,
  getAllFlats,
  getFlat,
} from "./requests/flatRequests";
import {
  changeOwner,
  createOwner,
  deleteOwner,
  getAllOwners,
  getOwner,
} from "./requests/ownersRequest";
import {
  changeWorker,
  createWorker,
  deleteWorker,
  getAllWorkers,
  getWorker,
} from "./requests/workersRequest";
import {
  changeOpt,
  createOpt,
  deleteOpt,
  getAllOpts,
  getOpt,
} from "./requests/typeOperationsRequest";
import {
  changeOp,
  createOp,
  deleteOp,
  getAllOps,
  getOp,
} from "./requests/operationsRequest";

export const tablesSlice = createSlice({
  name: "tablesData",
  initialState: {
    FlatData: [],
    OwnerData: [],
    OPData: [],
    OPTData: [],
    WorkerData: [],
    oneFlat: {},
    oneOwner: {},
    oneWorker: {},
    oneOP: {},
    oneOPT: {},
  },
  reducers: {},
  //GetAll
  extraReducers: (builder) => {
    builder.addCase(getAllFlats.fulfilled, (state, action) => {
      state.FlatData = action.payload;
    });
    builder.addCase(getAllOwners.fulfilled, (state, action) => {
      state.OwnerData = action.payload;
    });
    builder.addCase(getAllWorkers.fulfilled, (state, action) => {
      state.WorkerData = action.payload;
    });
    builder.addCase(getAllOpts.fulfilled, (state, action) => {
      state.OPTData = action.payload;
    });
    builder.addCase(getAllOps.fulfilled, (state, action) => {
      state.OPData = action.payload;
    });

    //GetOne
    builder.addCase(getFlat.fulfilled, (state, action) => {
      state.oneFlat = action.payload;
    });
    builder.addCase(getOwner.fulfilled, (state, action) => {
      state.oneOwner = action.payload;
    });
    builder.addCase(getWorker.fulfilled, (state, action) => {
      state.oneWorker = action.payload;
    });
    builder.addCase(getOpt.fulfilled, (state, action) => {
      state.oneOPT = action.payload;
    });
    builder.addCase(getOp.fulfilled, (state, action) => {
      state.oneOP = action.payload;
    });

    //Create
    builder.addCase(createFlat.fulfilled, (state, action) => {
      state.FlatData = action.payload;
    });
    builder.addCase(createOwner.fulfilled, (state, action) => {
      state.OwnerData = action.payload;
    });
    builder.addCase(createWorker.fulfilled, (state, action) => {
      state.WorkerData = action.payload;
    });
    builder.addCase(createOpt.fulfilled, (state, action) => {
      state.OPTData = action.payload;
    });
    builder.addCase(createOp.fulfilled, (state, action) => {
      state.OPData = action.payload;
    });

    //Delete
    builder.addCase(deleteFlat.fulfilled, (state, action) => {
      state.FlatData = action.payload;
    });
    builder.addCase(deleteOwner.fulfilled, (state, action) => {
      state.OwnerData = action.payload;
    });
    builder.addCase(deleteWorker.fulfilled, (state, action) => {
      state.WorkerData = action.payload;
    });
    builder.addCase(deleteOpt.fulfilled, (state, action) => {
      state.OPTData = action.payload;
    });
    builder.addCase(deleteOp.fulfilled, (state, action) => {
      state.OPData = action.payload;
    });

    //Change
    builder.addCase(changeFlat.fulfilled, (state, action) => {
      state.FlatData = action.payload;
    });
    builder.addCase(changeOwner.fulfilled, (state, action) => {
      state.OwnerData = action.payload;
    });
    builder.addCase(changeWorker.fulfilled, (state, action) => {
      state.WorkerData = action.payload;
    });
    builder.addCase(changeOpt.fulfilled, (state, action) => {
      state.OPTData = action.payload;
    });
    builder.addCase(changeOp.fulfilled, (state, action) => {
      state.OPData = action.payload;
    });
  },
});

export default tablesSlice.reducer;
