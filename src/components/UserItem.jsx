import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function UserItem({
  item: { name, surname, phone, roles, id }, onDeleteButtonClick,
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function RolesRow() {
    return roles.map((data) => (
      <TableRow key={id}>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.permissions.join(", ")}</TableCell>
      </TableRow>
    ));
  }

  function editBtnClick() {
    navigate("../" + id);
  }

  function deleteBtnClick(e){
    e.stopPropagation();
    onDeleteButtonClick(id);
  }

  const ColorTableRow = styled(TableRow)({
    backgroundColor: purple[50],
    cursor: "pointer",
    "&:hover": {
      backgroundColor: purple[200],
    },
  });

  return (
    <>
      <ColorTableRow onClick={() => setOpen(!open)}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">{surname}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>
          <IconButton aria-label="delete" onClick={deleteBtnClick}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </ColorTableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: green[300],
          }}
          colSpan={5}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Roles
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Permissions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <RolesRow />
                </TableBody>
              </Table>
              <Box align="center">
                <Button
                  style={{ marginTop: 5 }}
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={editBtnClick}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
