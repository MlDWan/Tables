import "./App.css";
import TransitionsModal from "./components/common/Modals/Modal";
import { useState } from "react";

import TabsRouter from "./components/Header";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  const location = useLocation();

  return (
    <div className="App">
      <TabsRouter />
      <Button
        sx={{
          fontSize: 20,
          padding: "5px 5px",
          width: 40,
          height: 40,
          minWidth: 0,
          borderRadius: "50%",
          lineHeight: "unset",
          left: 30,
          bottom: 30,
          position: "fixed",
          backgroundColor: `#${Math.random().toString(16).substring(2, 8)}`,
          boxShadow: `42px 42px 31px 0px rgba(${Math.random()
            .toString()
            .substring(2, 4)}, ${Math.random()
            .toString()
            .substring(2, 4)}, ${Math.random()
            .toString()
            .substring(2, 4)}, 0.2)`,
        }}
        color="primary"
        variant="contained"
        onClick={handleModal}>
        +
      </Button>

      <TransitionsModal
        open={open}
        handleModal={handleModal}
        path={location.pathname}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
