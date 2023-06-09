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
import ChangeTransitionsModal from "../Modals/changeModal";
import FilterModal from "../Modals/FilretModal";
import {
  changeOp,
  deleteOp,
  getAllOps,
  getOp,
} from "../../../store/requests/operationsRequest";
import FilterOperationTextFields from "../Forms/FilterOperation";
import ChangeOpTextFields from "../Forms/changeForms/ChangeFormOp";
import InfoModal from "../Modals/ModalInfo";
import OPInfo from "./TabInfo/OPInfo";

export const MUITableOperations = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);

  useEffect(() => {
    dispatch(getAllOps({}));
  }, []);

  const tableData = useSelector((state) => state.tables.OPData);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const oneOP = useSelector((state) => state.tables.oneOP);
  const handleModalInfo = (id) => {
    if (typeof id !== "object") dispatch(getOp(id));

    setOpenInfo((prev) => {
      return !prev;
    });
  };
  const flatsId = tableData.map((e) => e.flats.intFlatId);
  const workersId = tableData.map((e) => e.intWorkerId.intWorkerId);
  const handleModal = (id) => {
    id && setItem(tableData.find((item) => id === item.intOperationId));
    setOpen((prev) => {
      return !prev;
    });
  };
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  const handleModalFilter = () => {
    setOpenFilter((prev) => {
      return !prev;
    });
  };

  const ChangeDataInTable = (values) => {
    dispatch(changeOp(values));
  };

  const handleFilters = (values) => {
    Object.entries(values).map((e) => {
      if (!e[1]) delete values[e[0]];
    });
    dispatch(getAllOps(values));
    handleModalFilter();
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="outlined" color="info" onClick={handleModalFilter}>
        Фильтр
      </Button>

      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>id</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Описание</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow
              onClick={() => handleModalInfo(row.intOperationId)}
              key={row.intOperationId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row?.intOperationId}</TableCell>
              <TableCell>{row?.datOperationDate.slice(0, 10)}</TableCell>
              <TableCell>{row?.txtOperationDescription}</TableCell>
              <TableCell
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto 1fr",
                  columnGap: 25,
                }}
                align="center"
                onClick={handlePropagation}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteOp(row.intOperationId))}>
                  Удалить
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  onClick={() => handleModal(row.intOperationId)}>
                  Изменить
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <ChangeTransitionsModal open={open} handleModal={handleModal}>
            <ChangeOpTextFields
              handleModal={handleModal}
              opId={item?.intOperationId}
              date={item?.datOperationDate}
              descriptionOp={item?.txtOperationDescription}
              onSubmit={ChangeDataInTable}
            />
          </ChangeTransitionsModal>
          <FilterModal open={openFilter} handleModalFilter={handleModalFilter}>
            <FilterOperationTextFields
              onSubmit={handleFilters}
              flatsId={flatsId}
              workersId={workersId}
            />
          </FilterModal>
          <InfoModal open={openInfo} width={1000} handleModal={handleModalInfo}>
            <OPInfo info={oneOP} />
          </InfoModal>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
