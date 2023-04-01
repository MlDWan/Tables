import { createSlice } from "@reduxjs/toolkit";
import { dataTable } from "../tableData";
import { v4 as uuidv4 } from "uuid";
import { createFlat, getAllFlats } from "./requests/flatRequests";

export const tablesSlice = createSlice({
  name: "tablesData",
  initialState: {
    tablesData: dataTable,
  },
  reducers: {
    addData(state, action) {
      console.log(action);
      state.tablesData.push({
        id: uuidv4(),
        address: action.payload.address,
        floor: action.payload.floor,
        number_of_rooms: action.payload.number_of_rooms,
        area: action.payload.area,
        id_owners: action.payload.id_owners,
      });
    },
    remove(state, action) {
      state.tablesData = state.tablesData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllFlats.fulfilled, (state, action) => {
      state.tablesData = action.payload;
    });

    builder
      .addCase(createFlat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFlat.fulfilled, (state, action) => {
        state.tablesData = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(createFlat.rejected, (state, action) => {
        state.error = action.payload ?? "";
        state.isLoading = false;
      });

    // builder
    //   .addCase(changeStatus.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(changeStatus.fulfilled, (state, action) => {
    //     state.matters = action.payload;
    //     state.isLoading = false;
    //     state.error = "";
    //   })
    //   .addCase(changeStatus.rejected, (state, action) => {
    //     state.error = action.payload ?? "";
    //     state.isLoading = false;
    //   });

    // builder
    //   .addCase(deleteCurrentMatter.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteCurrentMatter.fulfilled, (state, action) => {
    //     successToast("Matter has been successfully deleted");
    //     state.matters = action.payload;
    //     state.isLoading = false;
    //     state.error = "";
    //   })
    //   .addCase(deleteCurrentMatter.rejected, (state, action) => {
    //     errorToast(action.payload ?? "unknown");
    //     state.error = action.payload ?? "";
    //     state.isLoading = false;
    //   });

    // builder
    //   .addCase(changeMatter.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(changeMatter.fulfilled, (state, action) => {
    //     successToast("Matter has been successfully changed");
    //     state.matters = action.payload;
    //     state.isLoading = false;
    //     state.error = "";
    //   })
    //   .addCase(changeMatter.rejected, (state, action) => {
    //     errorToast(action.payload ?? "unknown");
    //     state.error = action.payload ?? "";
    //     state.isLoading = false;
    //   });
  },
});

export const { addTodo, remove } = tablesSlice.actions;
export default tablesSlice.reducer;
