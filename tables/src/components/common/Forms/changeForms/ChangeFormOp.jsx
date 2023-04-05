import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";

export default function ChangeOpTextFields({
  onSubmit,
  opId,
  date,
  descriptionOp,
  handleModal,
}) {
  const [fieldOne, setFieldOne] = useState(date);
  const [fieldTwo, setFieldTwo] = useState(descriptionOp);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      intOperationId: opId,
      datOperationDate: fieldOne,
      txtOperationDescription: fieldTwo,
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
          label={"Дата"}
          type="date"
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="Описание"
          id="margin-normal"
          margin="normal"
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
