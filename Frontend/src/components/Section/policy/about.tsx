import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const AboutUse: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '64px' }}>
      <Paper elevation={6} style={{ padding: '32px', borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#0d3035' }}>
            About Us
          </Typography>
        </Box>
        <Typography variant="body1" style={{ lineHeight: '1.6', color: '#0e606e' }}>
          Durgapur Education Foundation is dedicated to providing high-quality educational programs and courses. We believe in making learning accessible to everyone, and our mission is to deliver knowledge that empowers individuals to achieve their personal and professional goals.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Our Vision
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          Our vision is to become a leader in online education, offering a wide range of courses tailored to meet the needs of students worldwide.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          - Experienced educators<br />
          - Flexible learning options<br />
          - Dedicated support team<br />
          - Comprehensive curriculum<br />
          Join us today to start your journey toward knowledge and success!
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUse;
