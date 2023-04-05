import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const OwnerInfo = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableCell align="center">Id пользователя</TableCell>
          <TableCell align="center">Адрес</TableCell>
          <TableCell align="center">Фамилия</TableCell>
          <TableCell align="center">Имя</TableCell>
          <TableCell align="center">Отчество</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{info.intOwnerId}</TableCell>
            <TableCell align="center">{info.txtAddress}</TableCell>
            <TableCell align="center">{info.txtOwnerSurname}</TableCell>
            <TableCell align="center">{info.txtOwnerName}</TableCell>
            <TableCell align="center">{info.txtOwnerSecondName}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OwnerInfo;
