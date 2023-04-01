import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFlat } from "../../../store/requests/flatRequests";
import { useEffect } from "react";

export default function FlatTextFields({ onSubmit }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldFive, setFieldFive] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      txtFlatAddress: fieldOne,
      fltArea: fieldTwo,
      intCount: fieldThree,
      intStorey: fieldFour,
      id_owners: fieldFive,
    });
  };
  const dispatch = useDispatch();

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
          label={"Адрес"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label={"Этаж"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Количество комнат"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Площадь"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFive}
          onChange={(e) => setFieldFive(e.target.value)}
          label={"Id владельца"}
          id="margin-normal"
          margin="normal"
        />
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
