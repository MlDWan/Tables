import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";

export default function ChangeFlatTextFields({
  onSubmit,
  flatId,
  address,
  storney,
  count,
  area,
  owner,
  handleModal,
}) {
  const [fieldOne, setFieldOne] = useState(address);
  const [fieldTwo, setFieldTwo] = useState(count);
  const [fieldThree, setFieldThree] = useState(storney);
  const [fieldFour, setFieldFour] = useState(area);
  const [fieldFive, setFieldFive] = useState(owner);
  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Number(flatId),
      intStorey: Number(fieldTwo),
      fltArea: Number(fieldFour),
      intCount: Number(fieldThree),
      txtFlatAddress: fieldOne,
      ownerId: Number(fieldFive),
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
          label={"Адрес"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="Этаж"
          type="number"
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Количество комнат"}
          id="margin-normal"
          margin="normal"
          type="number"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Площадь"}
          id="margin-normal"
          margin="normal"
          type="number"
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
