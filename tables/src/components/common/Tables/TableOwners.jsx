import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../store/tableSlice";
import { getAllFlats } from "../../../store/requests/flatRequests";

export const MUITableOwners = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tables.tablesData);
  // useEffect(() => {
  //   dispatch();
  //   // getAllFlats({
  //   //   ownerId: 1,
  //   //   fltAreaMin: 1,
  //   //   fltAreaMax: 1,
  //   //   intCountMin: 1,
  //   //   intCountMax: 1,
  //   //   intStoreyMin: 1,
  //   //   intStoreyMax: 1,
  //   // })
  // }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Отчество</TableCell>
          <TableCell>Адрес</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.Surname}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(remove(row))}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
