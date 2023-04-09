import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllFlats } from "../../../store/requests/flatRequests";

export default function OwnersTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllFlats());
  }, []);

  const flats = useSelector((state) => state.tables.FlatData);

  const getFlat = (name) => {
    if (name) {
      return flats.find((e) => e.txtFlatAddress === name).txtFlatAddress;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    setFieldError(false);

    if (fieldOne && fieldTwo && fieldThree && fieldFour) {
      setFieldError(false);
      onSubmit({
        txtOwnerSurname: String(fieldOne),
        txtOwnerName: String(fieldTwo),
        txtOwnerSecondName: String(fieldThree),
        txtAddress: getFlat(fieldFour),
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
          label={"Фамилия"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Имя"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Отчество"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
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
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
