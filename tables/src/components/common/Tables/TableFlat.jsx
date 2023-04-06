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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFlat,
  deleteFlat,
  getAllFlats,
  getFlat,
} from "../../../store/requests/flatRequests";
import ChangeFlatTextFields from "../Forms/changeForms/ChangeFormFlat";
import ChangeTransitionsModal from "../Modals/changeModal";
import FilterModal from "../Modals/FilretModal";
import FilterFlatTextFields from "../Forms/FilterFlat";
import InfoModal from "../Modals/ModalInfo";
import FlatInfo from "./TabInfo/FlatInfo";
import { useLocation } from "react-router-dom";

export const MUITableFlats = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const oneFlat = useSelector((state) => state.tables.oneFlat);
  useEffect(() => {
    dispatch(getAllFlats({}));
  }, []);

  const tableData = useSelector((state) => state.tables.FlatData);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const ownersId = tableData
    .map((e) => e.intOwnerId.map((e) => e.intOwnerId))
    .flat();
  const handleModal = (id) => {
    id && setItem(tableData.find((item) => id === item.intFlatId));
    setOpen((prev) => {
      return !prev;
    });
  };
  const handleModalFilter = () => {
    setOpenFilter((prev) => {
      return !prev;
    });
  };
  const handleFilters = (values) => {
    Object.entries(values).map((e) => {
      if (!e[1]) delete values[e[0]];
    });
    dispatch(getAllFlats(values));
    handleModalFilter();
  };

  const ChangeDataInTable = (values) => {
    dispatch(changeFlat(values));
  };
  const handleModalInfo = (id) => {
    if (typeof id !== "object") dispatch(getFlat(id));
    setOpenInfo((prev) => {
      return !prev;
    });
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <TableContainer component={Paper}>
      <Button variant="outlined" color="info" onClick={handleModalFilter}>
        Фильтр
      </Button>

      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>id</TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Адрес</TableCell>
          <TableCell>Этаж</TableCell>
          <TableCell>Количество комнат</TableCell>
          <TableCell>Площадь</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow
              onClick={() => handleModalInfo(row.intFlatId)}
              key={row?.intFlatId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row?.intFlatId}</TableCell>
              <TableCell>
                {row?.intOwnerId?.map((user) => user?.txtOwnerName)}
              </TableCell>
              <TableCell>
                {row?.intOwnerId?.map((user) => user?.txtOwnerSurname)}
              </TableCell>
              <TableCell>{row?.txtFlatAddress}</TableCell>
              <TableCell>{row?.intCount}</TableCell>
              <TableCell>{row?.intStorey}</TableCell>
              <TableCell>{row?.fltArea}</TableCell>
              <TableCell
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: 25,
                }}
                align="center"
                onClick={handlePropagation}>
                <Button
                  sx={{ margin: "auto" }}
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteFlat(row.intFlatId))}>
                  Удалить
                </Button>

                <Button
                  sx={{ margin: "auto" }}
                  variant="outlined"
                  color="info"
                  onClick={() => handleModal(row.intFlatId)}>
                  Изменить
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <ChangeTransitionsModal open={open} handleModal={handleModal}>
            <ChangeFlatTextFields
              handleModal={handleModal}
              flatId={item?.intFlatId}
              address={item?.txtFlatAddress}
              storney={item?.intStorey}
              count={item?.intCount}
              area={item?.fltArea}
              owner={item?.intOwnerId.map((e) => e.intOwnerId)}
              onSubmit={ChangeDataInTable}
            />
          </ChangeTransitionsModal>
          <InfoModal open={openInfo} width={1000} handleModal={handleModalInfo}>
            <FlatInfo info={oneFlat} />
          </InfoModal>
          <FilterModal open={openFilter} handleModalFilter={handleModalFilter}>
            <FilterFlatTextFields onSubmit={handleFilters} ownersId={ownersId} />
          </FilterModal>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
