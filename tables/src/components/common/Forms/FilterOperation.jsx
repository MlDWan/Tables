import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllFlats } from "../../../store/requests/flatRequests";
import { getAllWorkers } from "../../../store/requests/workersRequest";

export default function FilterOperationTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllWorkers());
    dispatch(getAllFlats());
  }, []);

  const workers = useSelector((state) => state.tables.WorkerData);
  const flats = useSelector((state) => state.tables.FlatData);
  const getIdWorker = (name) => {
    if (name) {
      return workers.find((e) => e.txtWorkerName === name).intWorkerId;
    }
  };
  const getIdFlat = (name) => {
    if (name) {
      return flats.find((e) => e.txtFlatAddress === name).intFlatId;
    }
  };
  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      operation_date_from: fieldOne,
      operation_date_to: fieldTwo,
      workerId: getIdWorker(fieldThree),
      flatId: getIdFlat(fieldFour),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "100%" },
      }}>
      <form onSubmit={submit} style={{ display: "grid" }}>
        <TextField
          value={fieldOne}
          onChange={(e) => setFieldOne(e.target.value)}
          label={"С"}
          id="margin-normal"
          margin="normal"
          type="date"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="По"
          id="margin-normal"
          margin="normal"
          type="date"
        />

        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Работник"}
          id="margin-normal"
          margin="normal"
          select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {workers.map((option) => (
            <MenuItem key={option.intWorkerId} value={option.txtWorkerName}>
              {option.txtWorkerSurname}
              {option.txtWorkerName}
              {option.txtWorkerSecondName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Адрес"}
          id="margin-normal"
          margin="normal"
          select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {flats.map((option) => (
            <MenuItem key={option.intFlatId} value={option.txtFlatAddress}>
              {option.txtFlatAddress}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" color="warning" type="submit">
          Применить
        </Button>
        <Button variant="outlined" color="inherit" type="submit">
          Сброс
        </Button>
      </form>
    </Box>
  );
}
