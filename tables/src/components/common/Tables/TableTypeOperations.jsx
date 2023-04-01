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

export const MUITableTypeOperations = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tables.tablesData);
  // useEffect(() => {
  //   dispatch();
  // getAllFlats({
  //   ownerId: 1,
  //   fltAreaMin: 1,
  //   fltAreaMax: 1,
  //   intCountMin: 1,
  //   intCountMax: 1,
  //   intStoreyMin: 1,
  //   intStoreyMax: 1,
  // })
  // }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>Наименование услуги</TableCell>
          <TableCell>Стоимость услуги</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {Object.values(row).map((value) => (
                <TableCell
                  key={value.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  {value}
                </TableCell>
              ))}
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
