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
  getOwner,
} from "../../../store/requests/ownersRequest";
import ChangeTransitionsModal from "../Modals/changeModal";
import ChangeOwnerTextFields from "../Forms/changeForms/ChangeFormOwner";
import InfoModal from "../Modals/ModalInfo";
import OwnerInfo from "./TabInfo/OwnerInfo";

export const MUITableOwners = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.tables.OwnerData);
  const oneOwner = useSelector((state) => state.tables.oneOwner);

  useEffect(() => {
    dispatch(getAllOwners());
  }, []);

  const ChangeDataInTable = (values) => {
    dispatch(changeOwner(values));
  };
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const handleModal = (id) => {
    id && setItem(tableData.find((item) => id === item.intOwnerId));
    setOpen((prev) => {
      return !prev;
    });
  };

  const handleModalInfo = (id) => {
    if (typeof id !== "object") dispatch(getOwner(id));
    setOpenInfo((prev) => {
      return !prev;
    });
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label={"simple table"}>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>Фамилия</TableCell>
          <TableCell>Имя</TableCell>
          <TableCell>Отчество</TableCell>
          <TableCell>Адрес</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              onClick={() => handleModalInfo(row.intOwnerId)}
              key={row.intOwnerId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{row.intOwnerId}</TableCell>
              <TableCell>{row.txtOwnerSurname}</TableCell>
              <TableCell>{row.txtOwnerName}</TableCell>
              <TableCell>{row.txtOwnerSecondName}</TableCell>
              <TableCell>{row.txtAddress}</TableCell>
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
                  onClick={() => dispatch(deleteOwner(row.intOwnerId))}>
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleModal(row.intOwnerId)}>
                  Change
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <ChangeTransitionsModal open={open} handleModal={handleModal}>
            <ChangeOwnerTextFields
              handleModal={handleModal}
              ownerId={item?.intOwnerId}
              surname={item?.txtOwnerSurname}
              name={item?.txtOwnerName}
              secondName={item?.txtOwnerSecondName}
              address={item?.txtAddress}
              onSubmit={ChangeDataInTable}
            />
          </ChangeTransitionsModal>
          <InfoModal open={openInfo} width={1000} handleModal={handleModalInfo}>
            <OwnerInfo info={oneOwner} />
          </InfoModal>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
