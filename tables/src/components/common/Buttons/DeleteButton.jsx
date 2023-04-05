import React, { memo } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deleteFlat } from "../../../store/requests/flatRequests";

const DeleteContainedButtons = memo(({ isSubmit, onClick, row }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="outlined"
      color="error"
      onClick={() => dispatch(deleteFlat(row.intFlatId))}>
      Delete
    </Button>
  );
});
export default DeleteContainedButtons;
