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

const OPTInfo = ({ info }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableCell align="center">Id типа работы</TableCell>
          <TableCell align="center">Наименование</TableCell>
          <TableCell align="center">Стоимость</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">{info.intOperationTypeId}</TableCell>
            <TableCell align="center">{info.txtOperationTypeName}</TableCell>
            <TableCell align="center">{info.fltOperationPrice}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default OPTInfo;
