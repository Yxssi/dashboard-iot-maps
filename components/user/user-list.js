import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";

export const UsersList = ({ users, ...rest }) => {
  const [selecteduserIds, setSelecteduserIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelecteduserIds;

    if (event.target.checked) {
      newSelecteduserIds = users.map((user) => user.id);
    } else {
      newSelecteduserIds = [];
    }

    setSelecteduserIds(newSelecteduserIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selecteduserIds.indexOf(id);
    let newSelecteduserIds = [];

    if (selectedIndex === -1) {
      newSelecteduserIds = newSelecteduserIds.concat(selecteduserIds, id);
    } else if (selectedIndex === 0) {
      newSelecteduserIds = newSelecteduserIds.concat(selecteduserIds.slice(1));
    } else if (selectedIndex === selecteduserIds.length - 1) {
      newSelecteduserIds = newSelecteduserIds.concat(
        selecteduserIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelecteduserIds = newSelecteduserIds.concat(
        selecteduserIds.slice(0, selectedIndex),
        selecteduserIds.slice(selectedIndex + 1)
      );
    }

    setSelecteduserIds(newSelecteduserIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selecteduserIds.length === users.length}
                    color="primary"
                    indeterminate={
                      selecteduserIds.length > 0 &&
                      selecteduserIds.length < users.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(0, limit).map((user) => (
                <TableRow
                  hover
                  key={user.id}
                  selected={selecteduserIds.indexOf(user.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selecteduserIds.indexOf(user.id) !== -1}
                      onChange={(event) => handleSelectOne(event, user.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={user.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(user.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {user.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {`${user.address.city}, ${user.address.state}, ${user.address.country}`}
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{format(user.createdAt, "dd/MM/yyyy")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};
