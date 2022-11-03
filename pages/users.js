import Head from "next/head";
import { Box, Container } from "@mui/material";
import { UsersList } from "../components/user/user-list";
import { UserListToolbar } from "../components/user/user-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { customers } from "../__mocks__/customers";
const Page = () => {
  const [listUsers, setlistUsers] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const getUsers = async () => {
    return await axios
      .get("https://dashboard-strapi.herokuapp.com/api/users")
      .then((res) => {
        setIsFetched(true);
        setlistUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (listUsers.length === 0 && !isFetched) {
      getUsers();
    }
  }, [listUsers]);
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      {listUsers.length > 0 && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <UserListToolbar />
            <Box sx={{ mt: 3 }}>{<UsersList users={listUsers} />}</Box>
          </Container>
        </Box>
      )}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
