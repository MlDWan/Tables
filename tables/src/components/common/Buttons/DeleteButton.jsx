import React, { memo } from "react";
import Button from "@mui/material/Button";

const ContainedButtons = memo(({ isSubmit, onClick }) => {
  return (
    <Button variant="outlined" color="error">
      Delete
    </Button>
  );
});
export default ContainedButtons;
