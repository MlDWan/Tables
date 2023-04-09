import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";

export default function WorkersTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldFive, setFieldFive] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setFieldError(false);
    if (fieldOne && fieldTwo && fieldThree && fieldFour && Number(fieldFive)) {
      setFieldError(false);
      onSubmit({
        txtWorkerSurname: String(fieldOne),
        txtWorkerName: String(fieldTwo),
        txtWorkerSecondName: String(fieldThree),
        txtWorkerSpecialist: String(fieldFour),
        fltSum: Number(fieldFive),
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
          label={"Специальность"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldFive}
          onChange={(e) => setFieldFive(e.target.value)}
          label={"Стоимость работы"}
          id="margin-normal"
          margin="normal"
          type="number"
          helperText="Поле должно быть числом и не должно быть пустым."
          error={fieldError}
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
