import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";

export default configureStore({
  name: "tables",
  reducer: {
    tables: tableReducer,
  },
});
