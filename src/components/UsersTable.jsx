import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteUser, getUsers } from '../services/users';
import { useEffect, useState } from "react";
import UserItem from './UserItem';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export default function UsersTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  };

  const navigate = useNavigate();

  function onDeleteBtnClick(id) {
    deleteUser(id).then(setUsers(users.filter((user) => user.id !== id)));
    
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="center">Surname</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((data) => (
              <UserItem key={data.id} item={data} onDeleteButtonClick={onDeleteBtnClick} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab sx={fabStyle} color="primary" aria-label="add" onClick={() => navigate("../create")}>
        <AddIcon />
      </Fab>
    </>
  );
}
