// PGMDMSPage.js
import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PGMDMSPage: React.FC = () => {
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
            About PG-MD/MS Course
          </Typography>
          <img
            src="https://via.placeholder.com/150"
            alt="PG-MD/MS Demo"
            style={{ marginBottom: "24px" }}
          />
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            “PG-MD/MS” The PG-MD/MS course is a top-notch postgraduate program
            that offers specialized medical training and expertise. This
            comprehensive course provides in-depth knowledge and practical
            skills necessary for aspiring doctors, surgeons, and consultants.
            With a strong focus on specialization and subspecialization,
            students gain advanced clinical skills and research capabilities.
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            The PG-MD/MS program equips students to diagnose and treat complex
            medical conditions while contributing to the advancement of medical
            science. Through theoretical learning, clinical experience, and
            research opportunities, students develop competence in their field.
            Join our PG-MD/MS course to embark on a transformative educational
            journey and become a skilled healthcare professional. Enroll now for
            a promising medical career.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginBottom: "16px", fontWeight: "bold" }}
          >
            Curriculum for MBBS
          </Typography>
          <TableContainer component={Paper} style={{ marginTop: "24px" }}>
            <Table>
              <TableHead style={{ backgroundColor: "#3f51b5" }}>
                <TableRow>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Year
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Subjects
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bold" }}>
                    Duration
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>First MBBS</TableCell>
                  <TableCell>Anatomy, Physiology & Biochemistry</TableCell>
                  <TableCell>2 Semesters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Second MBBS</TableCell>
                  <TableCell>Pharmacology, Pathology & Microbiology</TableCell>
                  <TableCell>3 Semesters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Final MBBS (Part-I)</TableCell>
                  <TableCell>
                    Ophthalmology, ENT, Community Medicine & Forensic Medicine
                  </TableCell>
                  <TableCell>2 Semesters</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Final MBBS (Part-II)</TableCell>
                  <TableCell>
                    General Medicine, Surgery, Obstetrics & Gynaecology and
                    Paediatrics
                  </TableCell>
                  <TableCell>2 Semesters</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Container>
  );
};

export default PGMDMSPage;
