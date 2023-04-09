import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ContainedButtons from "../../Buttons/ButtonAdd";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import { getAllFlats } from "../../../../store/requests/flatRequests";

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

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllFlats());
  }, []);

  const flats = useSelector((state) => state.tables.FlatData);

  const getIdFlat = (name) => {
    if (name) {
      return flats.find((e) => e.txtFlatAddress === name).txtFlatAddress;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Number(ownerId),
      txtOwnerSurname: fieldOne,
      txtOwnerName: fieldTwo,
      txtOwnerSecondName: fieldThree,
      txtAddress: getIdFlat(fieldFour),
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
          select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {flats.map((option) => (
            <MenuItem key={option.intFlatId} value={option.txtFlatAddress}>
              {option.txtFlatAddress}
            </MenuItem>
          ))}
        </TextField>

        <ContainedButtons isSubmit />
      </form>
    </Box>
  );
}
