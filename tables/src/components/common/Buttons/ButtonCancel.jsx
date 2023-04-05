import React, { memo } from "react";
import Button from "@mui/material/Button";

const ContainedButtonCancel = memo(({ isSubmit, onClick }) => {
  return (
    <Button variant="outlined" color="error">
      Cancel
    </Button>
  );
});
export default ContainedButtonCancel;
