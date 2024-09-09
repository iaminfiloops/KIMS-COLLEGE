// GNMPage.js
import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const GNMPage: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "64px" }}>
      <Paper
        elevation={6}
        style={{
          padding: "32px",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginBottom: "24px", fontWeight: "bold" }}
          >
            About GNM (General Nursing & Midwifery)
          </Typography>
          <img
            src="https://via.placeholder.com/150"
            alt="GNM Demo"
            style={{ marginBottom: "24px" }}
          />
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            GNM or General Nursing Midwifery is a three and a half-year diploma
            course in the field of Nursing. Students who wish to pursue the GNM
            diploma can proceed after passing their class 12 exam with any
            stream. The three-year and half-year course includes six months of
            mandatory internship. The GNM diploma course is one of the
            sought-after courses, which can be considered a stepping stone
            towards making a career in the Nursing field. Graduates of the GNM
            diploma can start their career by working with government and
            private hospitals and clinics.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            Eligibility Criteria
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            <strong>10 + 2:</strong> Minimum 50% of marks, in any stream.
            <br />
            <strong>Entrance Examination:</strong> Required.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default GNMPage;
