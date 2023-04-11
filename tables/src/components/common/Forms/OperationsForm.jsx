import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkers } from "../../../store/requests/workersRequest";
import { getAllFlats } from "../../../store/requests/flatRequests";
import { getAllOpts } from "../../../store/requests/typeOperationsRequest";
import { InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";

export default function OperationsTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState([]);
  const [fieldError, setFieldError] = useState(false);

  // const [selectoOpts, setselectoOpts] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFieldFour(typeof value === "string" ? value.split(",") : value);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllWorkers());
    dispatch(getAllFlats());
    dispatch(getAllOpts());
  }, []);

  const workers = useSelector((state) => state.tables.WorkerData);
  const flats = useSelector((state) => state.tables.FlatData);
  const opts = useSelector((state) => state.tables.OPTData);
  const getIdWorker = (name) =>
    workers.find((e) => e.txtWorkerName === name).intWorkerId;
  const getIdFlat = (name) =>
    flats.find((e) => e.txtFlatAddress === name).intFlatId;
  const getIdOpt = (name) => {
    return name.map(
      (elem) =>
        opts.find((e) => e.txtOperationTypeName === elem).intOperationTypeId
    );
  };
  const submit = (e) => {
    e.preventDefault();
    setFieldError(false);

    if (fieldOne && fieldTwo && fieldThree && fieldFour) {
      setFieldError(false);
      onSubmit({
        txtOperationDescription: fieldOne,
        intWorkerId: getIdWorker(fieldTwo),
        flatId: getIdFlat(fieldThree),
        operationTypeId: getIdOpt(fieldFour),
      });
    } else {
      setFieldError(true);
    }
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
          label={"Описание работы"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Работник"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
          select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {workers.map((option) => (
            <MenuItem key={option.intWorkerId} value={option.txtWorkerName}>
              {option.txtWorkerSurname} {option.txtWorkerName}{" "}
              {option.txtWorkerSecondName}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Адрес"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
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
        <InputLabel id="demo-multiple-name-label">Тип операции</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={fieldFour}
          onChange={handleChange}
          input={<OutlinedInput label="txtOperationTypeName" />}
          MenuProps={MenuProps}>
          {opts.map((name) => (
            <MenuItem
              key={name.intOperationTypeId}
              value={name.txtOperationTypeName}>
              {name.txtOperationTypeName}
            </MenuItem>
          ))}
        </Select>
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
