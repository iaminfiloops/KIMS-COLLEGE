import React, { useState, ChangeEvent } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Paper,
  Link,
  CircularProgress,
  Grid,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../app/auth/authSlice";
import { AppDispatch } from "../../../store";
import { Login } from "../../../assets";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  interface FormState {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await dispatch(loginUser(formData));
    } catch (err) {
      console.log(err);
      // Handle registration error here, you can set an error state and display it to the user
    } finally {
      setSubmitting(false);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "64px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Login}
            alt="Education Consultancy"
            style={{ maxWidth: "100%", height: "60vh" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} style={{ padding: "32px", borderRadius: "8px" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ShoppingCartIcon
                color="primary"
                style={{
                  fontSize: "40px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h5" gutterBottom>
                Welcome to Sanaka-Medical
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Please login to continue
              </Typography>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                style={{
                  marginBottom: "16px",
                }}
              />
              <TextField
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                style={{
                  marginBottom: "16px",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={submitting}
                sx={{ position: "relative" }}
              >
                {submitting ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  "Submit"
                )}
              </Button>
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "16px" }}
              >
                Don't have an account?{" "}
                <Link component={RouterLink} to="/user/register">
                  Register Now
                </Link>
              </Typography>
              <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "16px" }}
              >
                Are You An Admin?{" "}
                <Link component={RouterLink} to="/admin/dashboard">
                  Go To Admin Dashboard
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
