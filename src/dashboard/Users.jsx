import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Button } from "@mui/material";

// const getAllUsers = () => {
//   axios
//     .get("https://dashboard-yxssi.vercel.app/users")
//     .then(function (response) {
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

const mockUsers = [
  {
    _id: "6352a02531dd02d789cbd6da",
    name: "Yessi",
  },
  {
    _id: "6352a3748cb8f484f49482bf",
    info: {
      name: "Doe",
      firstname: "John",
      age: 32,
    },
    service: {
      id: 1,
      name: "Business",
    },
  },
  {
    _id: "6352a3b08cb8f484f49482c0",
    info: {
      name: "Bart",
      firstname: "Yann",
      age: 23,
    },
    service: {
      id: 1,
      name: "Business",
    },
  },
  {
    _id: "6352a3e41ded1fbd4e483be6",
    info: {
      name: "Mala",
      firstname: "John",
      age: 19,
    },
    service: {
      id: 1,
      name: "Business",
    },
  },
];
export default function Users() {
  // const users = getAllUsers()
  return (
    <>
      <Typography variant="h1">Utilisateurs</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {mockUsers.map((user, i) => (
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
