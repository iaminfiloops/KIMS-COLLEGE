import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { leadRegister } from "../../../app/leads/leadSlice";
import { AppDispatch } from "../../../store";
import ConfirmationPopup from "../../Notification/ConfirmationPopup";
import toast from "react-hot-toast";

const ContactUs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    place: "",
    course: "",
  });

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name as string]: value as string,
    });

    // Validate phone number
    if (name === "phoneNumber") {
      const isValidPhoneNumber = /^\d{10}$/.test(value as string);
      setPhoneError(
        isValidPhoneNumber ? null : "Phone number must be 10 digits."
      );
    }

    // Validate email
    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string);
      setEmailError(
        isValidEmail ? null : "Please enter a valid email address."
      );
    }
  };

  const ConfirmationMessages: any =
    "Your information has been shared with our College Representative. They will call you back soon. You can also reach them at the following numbers : 7477798949";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !phoneError &&
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.course &&
      formData.place
    ) {
      try {
        await dispatch(leadRegister(formData));
        toast.success("Form submitted successfully!");
        setShowConfirmation(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "",
          place: "",
        });
      } catch (err: any) {
        toast.error(err.message || "Something went wrong. Please try again.");
      }
    } else {
      toast.error("Please fill out the form correctly.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={4} textAlign="center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/933/419/original/apply-now-button-apply-now-template-for-website-apply-now-icon-flat-style-vector.jpg"
            alt="Company Logo"
            style={{
              width: "150px",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          />
        </motion.div>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ color: "#3f51b5", marginBottom: "20px" }}
        >
          Apply And Enroll
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextField
              fullWidth
              label="Mobile Number"
              variant="outlined"
              margin="normal"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!phoneError}
              helperText={phoneError}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TextField
              fullWidth
              label="Place"
              variant="outlined"
              margin="normal"
              name="place"
              value={formData.place}
              onChange={handleChange}
              style={{
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FormControl
              fullWidth
              variant="outlined"
              style={{ marginBottom: "1rem", borderRadius: "5px" }}
            >
              <InputLabel id="course-label">Course</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                label="Course"
              >
                <MenuItem value="Pg(Md/Ms)">Pg(Md/Ms)</MenuItem>
                <MenuItem value="MBBS">MBBS</MenuItem>
                <MenuItem value="Bsc.nursing">Bsc.nursing</MenuItem>
                <MenuItem value="Gnm">Gnm </MenuItem>
                <MenuItem value="B.pharma">B.pharma</MenuItem>
                <MenuItem value="B.tech">B.tech</MenuItem>
                <MenuItem value="B.tech lateral">B.tech lateral</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
              </Select>
            </FormControl>
          </motion.div>
          <Box mt={2} style={{ textAlign: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ backgroundColor: "#3f51b5", color: "#ffffff" }}
              >
                Submit
              </Button>
            </motion.div>
            <ConfirmationPopup
              isOpen={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              message={ConfirmationMessages}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
