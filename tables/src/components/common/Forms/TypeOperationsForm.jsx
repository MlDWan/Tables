import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";

export default function TypeOperationsTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      operationPrice: fieldOne,
      operationTypeName: fieldTwo,
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
          label={"Стоимость работы"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Наиенование работы"}
          id="margin-normal"
          margin="normal"
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
