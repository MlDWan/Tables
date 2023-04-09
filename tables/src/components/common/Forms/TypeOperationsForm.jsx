import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";

export default function TypeOperationsTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setFieldError(false);

    if (fieldOne && fieldTwo) {
      setFieldError(false);
      onSubmit({
        fltOperationPrice: Number(fieldOne),
        txtOperationTypeName: fieldTwo,
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
          label={"Стоимость работы"}
          id="margin-normal"
          margin="normal"
          type="number"
          helperText="Поле должно быть числом и не должно быть пустым."
          error={fieldError}
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Наименование работы"}
          id="margin-normal"
          margin="normal"
          helperText="Поле не должно быть пустым."
          error={fieldError}
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
