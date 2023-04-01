import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";

export default function OperationsTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldFive, setFieldFive] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      OperationDate: fieldOne,
      OperationDescription: fieldTwo,
      WorkerId: fieldThree,
      flatId: fieldFour,
      operationTypeId: fieldFive,
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
          label={"Дата начала работ"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Описание работы"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Id работника"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Id квартиры"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFive}
          onChange={(e) => setFieldFive(e.target.value)}
          label={"Id услуг"}
          id="margin-normal"
          margin="normal"
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
