import "./App.css";
import TransitionsModal from "./components/common/Modals/Modal";
import { useState } from "react";

import TabsRouter from "./components/Header";
import { useDispatch } from "react-redux";
// import { tablesSlice } from "./store/tableSlice";
import { Button } from "@mui/material";
import { createFlat } from "./store/requests/flatRequests";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  // const { addData } = tablesSlice.actions;

  const addDataInTable = (values) => {
    console.log(values);
    dispatch(createFlat(values));
  };

  const handleModal = () => {
    setOpen((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  const location = useLocation();

  return (
    <div className="App">
      <TabsRouter />
      <Button onClick={handleModal}>Добавить данные</Button>
      <TransitionsModal
        open={open}
        handleModal={handleModal}
        path={location.pathname}
        onSubmit={addDataInTable}
        // onClick={addDataInTable}
      />
    </div>
  );
}

export default App;
