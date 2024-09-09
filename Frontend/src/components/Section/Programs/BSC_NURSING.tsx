// BScNursingPage.js
import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const BScNursingPage: React.FC = () => {
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
            MAA SARADA NURSING SCHOOL & COLLEGE
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "16px",
              fontWeight: "bold",
              color: "#3f51b5",
            }}
          >
            Recognised by WBNC, INC AND WB HEALTH & FAMILY WELFARE
          </Typography>
          <img
            src="https://via.placeholder.com/150"
            alt="B.Sc. Nursing Demo"
            style={{ marginBottom: "24px" }}
          />
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            B.Sc. Nursing
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            What is B.Sc. Nursing?
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            B.Sc. Nursing or Bachelor of Science in Nursing is a{" "}
            <strong>4-year undergraduate course</strong> in the field of medical
            science. Aspirants who have passed class 12 with biology or have
            completed a diploma in Nursing are eligible to apply for B.Sc
            Nursing. Bachelor of Science in Nursing is a 4-years undergraduate
            course which prepares candidates to serve humanity through medical
            treatment. As the course inculcates the art of nursing the sick and
            the wounded, its curriculum includes subjects like physiology,
            anatomy, biochemistry, nutrition, psychology, etc, all related to
            the human body. Therefore, B.Sc Nursing is centered around people
            and society, focusing on attaining, maintaining, and recovering
            optimal health.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            Eligibility Criteria
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            10 + 2 PCBE
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            Through Entrance Examination
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            Minimum 50% in aggregate (Physics, Chemistry, Biology)
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default BScNursingPage;
