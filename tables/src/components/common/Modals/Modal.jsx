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
  children,
  path,
  onSubmit,
}) {
  if (path === "/owners") children = <OwnersTextFields onSubmit={onSubmit} />;

  if (path === "/flat/getAll")
    children = <FlatTextFields onSubmit={onSubmit} />;

  if (path === "/workers") children = <WorkersTextFields onSubmit={onSubmit} />;

  if (path === "/opt")
    children = <TypeOperationsTextFields onSubmit={onSubmit} />;

  if (path === "/op/getAll")
    children = <OperationsTextFields onSubmit={onSubmit} />;

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
