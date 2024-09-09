// MBBSPage.js
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

const MBBSPage: React.FC = () => {
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
            About MBBS Course
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            <strong>
              “Bachelor of Medicine and Bachelor of Surgery” (MBBS)
            </strong>{" "}
            is a curriculum offered in this institute. This is under the purview
            of the Medical Council of India.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Course Structure
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            The course is divided into pre, para, and clinical subjects covered
            in <strong>4.5 years</strong> duration. The pre-clinical subjects
            are anatomy, physiology, and biochemistry taught in the 1st year.
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            Para-clinical subjects such as microbiology, pathology, and
            pharmacology are taught in the 2nd year. Forensic medicine including
            toxicology and basic clinical subjects are also taught in this year.
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            Clinical subjects are covered in the final 2 years.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Internship
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            On successful completion of this curriculum, each student has to
            undergo <strong>1 year</strong> of compulsory rotating internship in
            different clinical specialties.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Degree Awarded
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            The degree awarded is{" "}
            <strong>“Bachelor of Medicine and Bachelor of Surgery”</strong>. The
            minimum requirements for the MBBS course are{" "}
            <strong>50% marks</strong> in physics, chemistry, biology, and
            English in the '10+2' examinations and to qualify in the National
            Eligibility Entrance Test (NEET).
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Entrance Examination
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "16px", lineHeight: "1.6" }}
          >
            Entrance examinations are conducted by the{" "}
            <strong>National Testing Agency (NTA)</strong> from 2020.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Course Duration
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "24px", lineHeight: "1.6" }}
          >
            <strong>Duration:</strong> 4½ Years & 1 year Internship
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Affiliation and Intake
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: "24px", lineHeight: "1.6" }}
          >
            The institution offers courses in medical specialties at the
            undergraduate level. The course is permitted by the Medical Council
            of India and affiliated with the West Bengal University of Health &
            Science. The annual intake is <strong>150 students</strong> for the
            MBBS Course.
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

export default MBBSPage;
