import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOwners } from "../../../store/requests/ownersRequest";
import { getAllWorkers } from "../../../store/requests/workersRequest";
import { getAllFlats } from "../../../store/requests/flatRequests";
import { getAllOpts } from "../../../store/requests/typeOperationsRequest";
import { MenuItem } from "@mui/material";

export default function OperationsTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
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
  const getIdOpt = (name) => [
    opts.find((e) => e.txtOperationTypeName === name).intOperationTypeId,
  ];
  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      txtOperationDescription: fieldOne,
      intWorkerId: getIdWorker(fieldTwo),
      flatId: getIdFlat(fieldThree),
      operationTypeId: getIdOpt(fieldFour),
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
          label={"Описание работы"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Работник"}
          id="margin-normal"
          margin="normal"
          select>
          {workers.map((option) => (
            <MenuItem key={option.intWorkerId} value={option.txtWorkerName}>
              {option.txtWorkerSurname}
              {option.txtWorkerName}
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
          select>
          {flats.map((option) => (
            <MenuItem key={option.intFlatId} value={option.txtFlatAddress}>
              {option.txtFlatAddress}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Услуг"}
          id="margin-normal"
          margin="normal"
          select>
          {opts.map((option) => (
            <MenuItem
              key={option.intOperationTypeId}
              value={option.txtOperationTypeName}>
              {option.txtOperationTypeName}
            </MenuItem>
          ))}
        </TextField>
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
