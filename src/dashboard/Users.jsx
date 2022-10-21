import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const getAllUsers = () => {
    axios
      .get("https://dashboard-yxssi.vercel.app/users", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
        setIsFetched(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!isFetched && users.length === 0) {
      getAllUsers();
    }
  }, [users, isFetched]);

  return (
    <>
      <Typography variant="h1">Utilisateurs</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {users.map((user, i) => (
          <ListItem>
            <ListItemText primary={user?.info?.name || user?.name} />
            <Button variant="contained">Modifier</Button>
            <Button variant="contained" color="error">
              Supprimer
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
