import React, { memo, useEffect } from "react";
import Button from "@mui/material/Button";
import { createFlat } from "../../../store/requests/flatRequests";
import { useDispatch } from "react-redux";

const ContainedButtons = memo(({ isSubmit, onClick }) => {
  const dispatch = useDispatch();
  return (
    <Button
      type={isSubmit ? "submit" : "button"}
      variant="contained"
      onClick={() => onClick && onClick()}
      add={() => {
        dispatch(
          createFlat({
            txtFlatAddress: "fieldOne",
            fltArea: "fieldTwo",
            intCount: "fieldThree",
            intStorey: "fieldFour",
            ownerId: "fieldFive",
          })
        );
      }}>
      Добавить
    </Button>
  );
});
export default ContainedButtons;
