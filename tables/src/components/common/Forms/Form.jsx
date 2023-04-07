import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContainedButtons from "../Buttons/ButtonAdd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOwners } from "../../../store/requests/ownersRequest";
import { MenuItem } from "@mui/material";

export default function FlatTextFields({ onSubmit, row }) {
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [fieldThree, setFieldThree] = useState("");
  const [fieldFour, setFieldFour] = useState("");
  const [fieldFive, setFieldFive] = useState("");

  const owners = useSelector((state) => state.tables.OwnerData);
  const getIdOwner = (name) =>
    owners.find((e) => e.txtOwnerName === name).intOwnerId;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllOwners());
  }, []);

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      txtFlatAddress: fieldOne,
      fltArea: Number(fieldTwo),
      intCount: Number(fieldThree),
      intStorey: Number(fieldFour),
      ownerId: getIdOwner(fieldFive),
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
          label={"Владелец"}
          id="margin-normal"
          margin="normal"
          select>
          {owners.map((option) => (
            <MenuItem key={option.intOwnerId} value={option.txtOwnerName}>
              {option.txtOwnerName} {option.txtOwnerSecondName}{" "}
              {option.txtOwnerSurname}
            </MenuItem>
          ))}
        </TextField>
        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
