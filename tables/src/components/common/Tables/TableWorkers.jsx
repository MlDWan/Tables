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
import {
  changeWorker,
  deleteWorker,
  getAllWorkers,
  getWorker,
} from "../../../store/requests/workersRequest";
import ChangeWorkerTextFields from "../Forms/changeForms/ChangeFormWorker";
import InfoModal from "../Modals/ModalInfo";
import WorkerInfo from "./TabInfo/WorkerInfo";

export const MUITableWorkers = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tables.WorkerData);
  useEffect(() => {
    dispatch(getAllWorkers());
  }, []);
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  const ChangeDataInTable = (values) => {
    dispatch(changeWorker(values));
  };
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const oneWorker = useSelector((state) => state.tables.oneWorker);
  const handleModalInfo = (id) => {
    if (typeof id !== "object") dispatch(getWorker(id));
    setOpenInfo((prev) => {
      return !prev;
    });
  };
  const handleModal = (id) => {
    id && setItem(tableData.find((item) => id === item.intWorkerId));
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Отчество</TableCell>
          <TableCell>Специальность</TableCell>
          <TableCell>Оплата</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              onClick={() => handleModalInfo(row.intWorkerId)}
              key={row.intWorkerId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.intWorkerId}</TableCell>
              <TableCell>{row.txtWorkerSurname}</TableCell>
              <TableCell>{row.txtWorkerName}</TableCell>
              <TableCell>{row.txtWorkerSecondName}</TableCell>
              <TableCell>{row.txtWorkerSpecialist}</TableCell>
              <TableCell>{row.fltSum}</TableCell>
              <TableCell
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: 25,
                }}
                align="center"
                onClick={handlePropagation}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteWorker(row.intWorkerId))}>
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleModal(row.intWorkerId)}>
                  Change
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <ChangeTransitionsModal open={open} handleModal={handleModal}>
            <ChangeWorkerTextFields
              handleModal={handleModal}
              workerId={item?.intWorkerId}
              surname={item?.txtWorkerSurname}
              name={item?.txtWorkerName}
              secondName={item?.txtWorkerSecondName}
              specialist={item?.txtWorkerSpecialist}
              sum={item?.fltSum}
              onSubmit={ChangeDataInTable}
            />
          </ChangeTransitionsModal>
          <InfoModal open={openInfo} width={1000} handleModal={handleModalInfo}>
            <WorkerInfo info={oneWorker} />
          </InfoModal>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
