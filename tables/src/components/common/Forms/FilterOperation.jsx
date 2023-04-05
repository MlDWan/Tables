import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";

export default function FilterOperationTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      operation_date_from: fieldOne,
      operation_date_to: fieldTwo,
      workerId: Number(fieldThree),
      flatId: Number(fieldFour),
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
          label={"Id работника"}
          id="margin-normal"
          margin="normal"
          type="number"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Id квартиры"}
          id="margin-normal"
          margin="normal"
          type="number"
        />
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
