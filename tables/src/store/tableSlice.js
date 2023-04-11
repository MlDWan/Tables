import { createSlice } from "@reduxjs/toolkit";
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
import { errorToast, successToast } from "../toasts/toast";

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
    builder
      .addCase(getFlat.fulfilled, (state, action) => {
        state.oneFlat = action.payload;
      })
      .addCase(getFlat.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(getOwner.fulfilled, (state, action) => {
        state.oneOwner = action.payload;
      })
      .addCase(getOwner.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(getWorker.fulfilled, (state, action) => {
        state.oneWorker = action.payload;
      })
      .addCase(getWorker.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(getOpt.fulfilled, (state, action) => {
        state.oneOPT = action.payload;
      })
      .addCase(getOpt.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(getOp.fulfilled, (state, action) => {
        state.oneOP = action.payload;
      })
      .addCase(getOp.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });

    //Create
    builder
      .addCase(createFlat.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.FlatData = action.payload;
      })
      .addCase(createFlat.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(createOwner.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OwnerData = action.payload;
      })
      .addCase(createOwner.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(createWorker.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.WorkerData = action.payload;
      })
      .addCase(createWorker.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(createOpt.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPTData = action.payload;
      })
      .addCase(createOpt.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(createOp.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPData = action.payload;
      })
      .addCase(createOp.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });

    //Delete
    builder
      .addCase(deleteFlat.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.FlatData = action.payload;
      })
      .addCase(deleteFlat.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(deleteOwner.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OwnerData = action.payload;
      })
      .addCase(deleteOwner.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(deleteWorker.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.WorkerData = action.payload;
      })
      .addCase(deleteWorker.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(deleteOpt.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPTData = action.payload;
      })
      .addCase(deleteOpt.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(deleteOp.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPData = action.payload;
      })
      .addCase(deleteOp.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });

    //Change
    builder
      .addCase(changeFlat.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.FlatData = action.payload;
      })
      .addCase(changeFlat.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(changeOwner.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OwnerData = action.payload;
      })
      .addCase(changeOwner.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(changeWorker.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.WorkerData = action.payload;
      })
      .addCase(changeWorker.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(changeOpt.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPTData = action.payload;
      })
      .addCase(changeOpt.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
    builder
      .addCase(changeOp.fulfilled, (state, action) => {
        successToast("Успешно!");
        state.OPData = action.payload;
      })
      .addCase(changeOp.rejected, (action) => {
        errorToast(action.payload ?? "unknown");
      });
  },
});

export default tablesSlice.reducer;
