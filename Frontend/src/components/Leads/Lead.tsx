import React, { useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux"; // Assuming you are using Redux
import { leadsGets } from "../../app/leads/leadSlice";
import { RootState } from "../../store";
import { AppDispatch } from "../../store";

const Leads: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, leads, error } = useSelector(
    (state: RootState) => state.leads
  );

  useEffect(() => {
    dispatch(leadsGets());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "10vh" }}>
      <Typography variant="h4" gutterBottom>
        Leads
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>College</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((lead, index) => (
                <TableRow key={index}>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>{lead.phoneNumber}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.course}</TableCell>
                  <TableCell>{lead.place}</TableCell>
                  <TableCell>{lead.college}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Leads;
