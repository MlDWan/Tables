import React, { memo } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deleteFlat, getAllFlats } from "../../../store/requests/flatRequests";
import { useEffect } from "react";

const FilterContainedButtons = ({ isSubmit, onClick, row }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={useEffect(() => {
        dispatch(
          getAllFlats()

          // {
          //   ownerId: 1,
          //   fltAreaMin: 1,
          //   fltAreaMax: 1,
          //   intCountMin: 1,
          //   intCountMax: 1,
          //   intStoreyMin: 1,
          //   intStoreyMax: 1,
          // }
        );
      }, [])}>
      Фильтровать
    </Button>
  );
};
export default FilterContainedButtons;
