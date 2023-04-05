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

const OPInfo = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableCell align="center">Id работы</TableCell>
          <TableCell align="center">Дата</TableCell>
          <TableCell align="center">Описание</TableCell>
          <TableCell align="center">Адрес</TableCell>
          <TableCell align="center">Этаж</TableCell>
          <TableCell align="center">Тип работы</TableCell>
          <TableCell align="center">Цена</TableCell>
          <TableCell align="center">Фамилия работника</TableCell>
          <TableCell align="center">Имя работника</TableCell>
          <TableCell align="center">Отчество работника</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{info.intOperationId}</TableCell>
            <TableCell align="center">{info.datOperationDate}</TableCell>
            <TableCell align="center">{info.txtOperationDescription}</TableCell>
            <TableCell align="center">{info?.flats?.txtFlatAddress}</TableCell>
            <TableCell align="center">{info?.flats?.intStorey}</TableCell>
            <TableCell align="center">
              {info?.intOperationTypeId?.map((e) => e.txtOperationTypeName)}
            </TableCell>
            <TableCell align="center">
              {info?.intOperationTypeId?.map((e) => e.fltOperationPrice)}
            </TableCell>
            <TableCell align="center">
              {info?.intWorkerId?.txtWorkerSurname}
            </TableCell>
            <TableCell align="center">
              {info?.intWorkerId?.txtWorkerName}
            </TableCell>
            <TableCell align="center">
              {info?.intWorkerId?.txtWorkerSecondName}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OPInfo;
