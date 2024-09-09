import { Box, Typography } from "@mui/material";

const Dashcard = () => {
  return (
    <Box
      sx={{
        marginTop:'20px',
        paddingTop: "10vh",
        backgroundColor: "#e8eaef",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <Typography variant="h5">Hello Admin Welcome To Sanakamedical</Typography>
    </Box>
  );
};

export default Dashcard;
