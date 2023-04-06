import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, MenuItem } from "@mui/material";

export default function FilterFlatTextFields({ onSubmit, ownersId }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldFive, setFieldFive] = useState("");
  const [fieldSix, setFieldSix] = useState("");
  const [fieldSeven, setFieldSeven] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      ownerId: Number(fieldOne),
      fltAreaMin: Number(fieldTwo),
      fltAreaMax: Number(fieldThree),
      intCountMin: Number(fieldFour),
      intCountMax: Number(fieldFive),
      intStoreyMin: Number(fieldSix),
      intStoreyMax: Number(fieldSeven),
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { width: "100%" },
      }}
      autoComplete="off"
      noValidate>
      <form onSubmit={submit} style={{ display: "grid" }}>
        <TextField
          value={fieldOne}
          onChange={(e) => setFieldOne(e.target.value)}
          label={"id пользователя"}
          id="margin-normal"
          margin="normal"
          select>
          {ownersId.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="Минимальная площадь"
          type="number"
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Максимальная площадь"}
          id="margin-normal"
          margin="normal"
          type="number"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Минимальный этаж"}
          id="margin-normal"
          margin="normal"
          type="number"
        />
        <TextField
          value={fieldFive}
          onChange={(e) => setFieldFive(e.target.value)}
          label={"Максимальный этаж"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldSix}
          onChange={(e) => setFieldSix(e.target.value)}
          label={"Минимум комнат"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldSeven}
          onChange={(e) => setFieldSeven(e.target.value)}
          label={"Максимум комнат"}
          id="margin-normal"
          margin="normal"
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
