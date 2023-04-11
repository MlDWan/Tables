import React, { memo } from "react";
import Button from "@mui/material/Button";

const ContainedButtons = memo(({ isSubmit, onClick }) => {
  return (
    <Button
      type={isSubmit ? "submit" : "button"}
      variant="contained"
      onClick={() => onClick && onClick()}>
      Добавить
    </Button>
  );
});
export default ContainedButtons;
