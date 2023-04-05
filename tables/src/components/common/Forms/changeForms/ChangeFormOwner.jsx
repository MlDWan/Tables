import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";

export default function ChangeOwnerTextFields({
  onSubmit,
  ownerId,
  surname,
  name,
  secondName,
  address,
  handleModal,
}) {
  const [fieldOne, setFieldOne] = useState(surname);
  const [fieldTwo, setFieldTwo] = useState(name);
  const [fieldThree, setFieldThree] = useState(secondName);
  const [fieldFour, setFieldFour] = useState(address);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Number(ownerId),
      txtOwnerSurname: fieldOne,
      txtOwnerName: fieldTwo,
      txtOwnerSecondName: fieldThree,
      txtAddress: fieldFour,
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
          label={"Фамилия"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldTwo}
          onChange={(e) => setFieldTwo(e.target.value)}
          label="Имя"
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldThree}
          onChange={(e) => setFieldThree(e.target.value)}
          label={"Отчество"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFour}
          onChange={(e) => setFieldFour(e.target.value)}
          label={"Адрес"}
          id="margin-normal"
          margin="normal"
        />

        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
