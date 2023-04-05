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

const WorkerInfo = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableCell align="center">Id работника</TableCell>
          <TableCell align="center">Фамилия</TableCell>
          <TableCell align="center">Имя</TableCell>
          <TableCell align="center">Отчество</TableCell>
          <TableCell align="center">Специальность</TableCell>
          <TableCell align="center">Оплата</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{info.intWorkerId}</TableCell>
            <TableCell align="center">{info.txtWorkerSurname}</TableCell>
            <TableCell align="center">{info.txtWorkerName}</TableCell>
            <TableCell align="center">{info.txtWorkerSecondName}</TableCell>
            <TableCell align="center">{info.txtWorkerSpecialist}</TableCell>
            <TableCell align="center">{info.fltSum}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default WorkerInfo;
