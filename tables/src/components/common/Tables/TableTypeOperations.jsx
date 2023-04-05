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
  changeOwner,
  deleteOwner,
  getAllOwners,
} from "../../../store/requests/ownersRequest";
import ChangeTransitionsModal from "../Modals/changeModal";
import ChangeOwnerTextFields from "../Forms/changeForms/ChangeFormOwner";
import {
  changeOpt,
  deleteOpt,
  getAllOpts,
  getOpt,
} from "../../../store/requests/typeOperationsRequest";
import ChangeOptTextFields from "../Forms/changeForms/ChangeFormOpt";
import InfoModal from "../Modals/ModalInfo";
import OPTInfo from "./TabInfo/OPTInfo";

export const MUITableTypeOperations = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tables.OPTData);
  useEffect(() => {
    dispatch(getAllOpts());
  }, []);

  const ChangeDataInTable = (values) => {
    dispatch(changeOpt(values));
  };
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const oneOPT = useSelector((state) => state.tables.oneOPT);
  const handleModalInfo = (id) => {
    if (typeof id !== "object") dispatch(getOpt(id));
    setOpenInfo((prev) => {
      return !prev;
    });
  };
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  const handleModal = (id) => {
    id && setItem(tableData.find((item) => id === item.intOperationTypeId));
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>Наименование операций</TableCell>
          <TableCell>Цена</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              onClick={() => handleModalInfo(row.intOperationTypeId)}
              key={row.intOperationTypeId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row?.intOperationTypeId}</TableCell>
              <TableCell>{row?.txtOperationTypeName}</TableCell>
              <TableCell>{row?.fltOperationPrice}</TableCell>
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
                  onClick={() => dispatch(deleteOpt(row.intOperationTypeId))}>
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleModal(row.intOperationTypeId)}>
                  Change
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <ChangeTransitionsModal open={open} handleModal={handleModal}>
            <ChangeOptTextFields
              handleModal={handleModal}
              optId={item?.intOperationTypeId}
              name={item?.txtOperationTypeName}
              price={item?.fltOperationPrice}
              onSubmit={ChangeDataInTable}
            />
          </ChangeTransitionsModal>
          <InfoModal open={openInfo} width={1000} handleModal={handleModalInfo}>
            <OPTInfo info={oneOPT} />
          </InfoModal>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
