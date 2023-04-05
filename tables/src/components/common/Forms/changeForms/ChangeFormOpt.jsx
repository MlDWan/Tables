import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";

export default function ChangeOptTextFields({
  onSubmit,
  optId,
  name,
  price,
  handleModal,
}) {
  const [fieldOne, setFieldOne] = useState(name);
  const [fieldTwo, setFieldTwo] = useState(price);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Number(optId),
      txtOperationTypeName: fieldOne,
      fltOperationPrice: Number(fieldTwo),
    });
    handleModal();
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
          label={"Наименование"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="Стоимость"
          id="margin-normal"
          type="number"
          margin="normal"
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
