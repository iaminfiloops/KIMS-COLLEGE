// ProgramsPage.js
import React from "react";
import { Container, Typography, Paper, Box, Link, Grid } from "@mui/material";

const ProgramsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '64px' }}>
      <Paper elevation={6} style={{ padding: '32px', borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#0e606e' }}>
            Our Programs
          </Typography>
          <Typography variant="h6" style={{ marginBottom: '24px', lineHeight: '1.6', color: '#333' }}>
            Explore our diverse range of programs designed to foster excellence in healthcare education.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #0e606e' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0e606e' }}>MBBS</Typography>
              <Typography variant="body1" style={{ marginTop: '16px', color: '#555' }}>
                Bachelor of Medicine and Bachelor of Surgery - A 4.5-year course plus 1 year internship.
              </Typography>
              <Link href="/mbbs" style={{ color: '#0e606e', textDecoration: 'none', marginTop: '16px', display: 'block', fontWeight: 'bold' }}>
                Learn More
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #0e606e' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0e606e' }}>B.Pharmacy</Typography>
              <Typography variant="body1" style={{ marginTop: '16px', color: '#555' }}>
                Bachelor of Pharmacy - A 4-year undergraduate course in Pharmacy education.
              </Typography>
              <Link href="/bpharmacy" style={{ color: '#0e606e', textDecoration: 'none', marginTop: '16px', display: 'block', fontWeight: 'bold' }}>
                Learn More
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #0e606e' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0e606e' }}>B.Sc. Nursing</Typography>
              <Typography variant="body1" style={{ marginTop: '16px', color: '#555' }}>
                Bachelor of Science in Nursing - A 4-year undergraduate course.
              </Typography>
              <Link href="/bscnursing" style={{ color: '#0e606e', textDecoration: 'none', marginTop: '16px', display: 'block', fontWeight: 'bold' }}>
                Learn More
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #0e606e' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0e606e' }}>PG-MD/MS</Typography>
              <Typography variant="body1" style={{ marginTop: '16px', color: '#555' }}>
                Postgraduate course for advanced medical training and specialization.
              </Typography>
              <Link href="/pgmdms" style={{ color: '#0e606e', textDecoration: 'none', marginTop: '16px', display: 'block', fontWeight: 'bold' }}>
                Learn More
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#ffffff', border: '1px solid #0e606e' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#0e606e' }}>GNM</Typography>
              <Typography variant="body1" style={{ marginTop: '16px', color: '#555' }}>
                General Nursing and Midwifery - A 3.5-year diploma course in Nursing.
              </Typography>
              <Link href="/gnm" style={{ color: '#0e606e', textDecoration: 'none', marginTop: '16px', display: 'block', fontWeight: 'bold' }}>
                Learn More
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProgramsPage;
