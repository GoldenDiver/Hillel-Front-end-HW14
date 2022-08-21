import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { updateUser, getUsers } from "../services/users";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    roles: [{ name: "Null", permissions: [] }],
  });
  const { id } = useParams();
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [roleUsers, setRoleUsers] = useState(false);
  const [roleRoles, setRoleRoles] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers(id).then((data) => render(data));
  }, []);

  function render(data) {
    setUser(data);
    data.roles[0].permissions.map((data) => {
      if (data === "users") {
        setRoleUsers(true);
      }
    });
    data.roles[0].permissions.map((data) => {
      if (data === "roles") {
        setRoleRoles(true);
      }
    });
  }

  function addBtnClick() {
    if (user.name === "") {
      setNameError(true);
      return;
    }
    setNameError(false);
    if (user.surname === "") {
      setSurnameError(true);
      return;
    }
    setSurnameError(false);
    if (user.phone === "") {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    updateUser(user).then(navigate("../users"));
  }

  function onChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function onRoleChange(e) {
    function pushed(user) {
      user.roles[0].permissions.push(e.target.id);
      if (user.roles[0].name === "Null") {
        user.roles[0].name = e.target.id + " Admin";
      } else {
        user.roles[0].name = "Super Admin";
      }
      setUser(user);
    }

    function filtered(user) {
      const newrole = user.roles[0].permissions.filter(
        (data) => data !== e.target.id
      );
      user.roles[0].permissions = newrole;
      if (user.roles[0].permissions.length === 0) {
        user.roles[0].name = "Null";
      } else {
        if (e.target.id === "users") {
          user.roles[0].name = "roles Admin";
        } else {
          user.roles[0].name = "users Admin";
        }
      }
      setUser(user);
    }

    e.target.checked ? pushed(user) : filtered(user);
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h5" component="h2">
          Enter new user
        </Typography>
        <TextField
          error={nameError}
          id="name"
          label="Name"
          onChange={onChange}
          value={user.name}
        />
        <TextField
          error={surnameError}
          id="surname"
          label="Surname"
          onChange={onChange}
          value={user.surname}
        />
        <TextField
          error={phoneError}
          id="phone"
          label="Phone"
          onChange={onChange}
          value={user.phone}
        />
      </Stack>
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h5" component="h2">
          Select permissions
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={roleUsers} id="users" />}
            label="Users"
            onChange={onRoleChange}
            onClick={() => setRoleUsers(!roleUsers)}
          />
          <FormControlLabel
            control={<Checkbox checked={roleRoles} id="roles" />}
            label="Roles"
            onChange={onRoleChange}
            onClick={() => setRoleRoles(!roleRoles)}
          />
        </FormGroup>
      </Stack>
      <Button variant="contained" startIcon={<AddIcon />} onClick={addBtnClick}>
        Add
      </Button>
    </Box>
  );
}
