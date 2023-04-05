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

const FlatInfo = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableCell>id</TableCell>
          <TableCell>Адрес</TableCell>
          <TableCell>Площадь</TableCell>
          <TableCell>Комнат</TableCell>
          <TableCell>Этаж</TableCell>
          <TableCell>Дата проведения работ</TableCell>
          <TableCell>Описание работы</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Имя</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{info?.intFlatId}</TableCell>
            <TableCell align="center">{info?.txtFlatAddress}</TableCell>
            <TableCell align="center">{info?.fltArea}</TableCell>
            <TableCell align="center">{info?.intCount}</TableCell>
            <TableCell align="center">{info?.intStorey}</TableCell>
            <TableCell align="center">
              {info?.operations?.map((e) => e.datOperationDate)}
            </TableCell>
            <TableCell align="center">
              {info?.operations?.map((e) => e.txtOperationDescription)}
            </TableCell>
            <TableCell align="center">
              {info?.intOwnerId?.map((e) => e.txtOwnerSurname)}
            </TableCell>
            <TableCell align="center">
              {info?.intOwnerId?.map((e) => e.txtOwnerName)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default FlatInfo;
