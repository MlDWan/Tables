import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";

export default function ChangeWorkerTextFields({
  onSubmit,
  workerId,
  surname,
  name,
  secondName,
  specialist,
  sum,
  handleModal,
}) {
  const [fieldOne, setFieldOne] = useState(surname);
  const [fieldTwo, setFieldTwo] = useState(name);
  const [fieldThree, setFieldThree] = useState(secondName);
  const [fieldFour, setFieldFour] = useState(specialist);
  const [fieldFive, setFieldFive] = useState(sum);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Number(workerId),
      txtWorkerSurname: fieldOne,
      txtWorkerName: fieldTwo,
      txtWorkerSecondName: fieldThree,
      txtWorkerSpecialist: fieldFour,
      fltSum: Number(fieldFive),
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
          label={"Специализация"}
          id="margin-normal"
          margin="normal"
        />
        <TextField
          value={fieldFive}
          onChange={(e) => setFieldFive(e.target.value)}
          label={"Оплата"}
          id="margin-normal"
          margin="normal"
        />

        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
