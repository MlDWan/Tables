import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import OwnersTextFields from "../Forms/OwnersForm";
import FlatTextFields from "../Forms/Form";
import WorkersTextFields from "../Forms/WorkersForm";
import TypeOperationsTextFields from "../Forms/TypeOperationsForm";
import OperationsTextFields from "../Forms/OperationsForm";
import { useDispatch } from "react-redux";
import { createFlat } from "../../../store/requests/flatRequests";
import { createOwner } from "../../../store/requests/ownersRequest";
import { createWorker } from "../../../store/requests/workersRequest";
import { createOpt } from "../../../store/requests/typeOperationsRequest";
import { createOp } from "../../../store/requests/operationsRequest";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  open,
  handleModal,
  path,
  onSubmit,
}) {
  let children;

  const dispatch = useDispatch();
  const addDataInTable = (values) => {
    dispatch(createFlat(values));
  };
  const addDataInTableOwner = (values) => {
    dispatch(createOwner(values));
  };
  const addDataInTableOP = (values) => {
    dispatch(createOp(values));
  };
  const addDataInTableOPT = (values) => {
    dispatch(createOpt(values));
  };
  const addDataInTableWorker = (values) => {
    dispatch(createWorker(values));
  };

  const handleSubmitFlat = (values) => {
    addDataInTable(values);
    handleModal();
  };
  const handleSubmitOwner = (values) => {
    addDataInTableOwner(values);
    handleModal();
  };
  const handleSubmitOP = (values) => {
    addDataInTableOP(values);
    handleModal();
  };
  const handleSubmitOPT = (values) => {
    addDataInTableOPT(values);
    handleModal();
  };
  const handleSubmitWorker = (values) => {
    addDataInTableWorker(values);
    handleModal();
  };

  if (path === "/owner")
    children = <OwnersTextFields onSubmit={handleSubmitOwner} />;

  if (path === "/flat/getAll") {
    children = <FlatTextFields onSubmit={handleSubmitFlat} />;
  }

  if (path === "/worker")
    children = <WorkersTextFields onSubmit={handleSubmitWorker} />;

  if (path === "/opt")
    children = <TypeOperationsTextFields onSubmit={handleSubmitOPT} />;

  if (path === "/op/getAll")
    children = <OperationsTextFields onSubmit={handleSubmitOP} />;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
