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
import { tablesSlice } from "../../../store/tableSlice";
import { getAllFlats } from "../../../store/requests/flatRequests";

export const MUITableFlats = () => {
  const { remove } = tablesSlice.actions;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(123);
    dispatch(
      getAllFlats()

      // {
      //   ownerId: 1,
      //   fltAreaMin: 1,
      //   fltAreaMax: 1,
      //   intCountMin: 1,
      //   intCountMax: 1,
      //   intStoreyMin: 1,
      //   intStoreyMax: 1,
      // }
    );
  }, []);

  const tableData = useSelector((state) => state.tables.tablesData);
  console.log(tableData);
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>id</TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Адрес</TableCell>
          <TableCell>Этаж</TableCell>
          <TableCell>Количество комнат</TableCell>
          <TableCell>Площадь</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.floor}</TableCell>
              <TableCell>{row.number_of_rooms}</TableCell>
              <TableCell>{row.area}</TableCell>
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
