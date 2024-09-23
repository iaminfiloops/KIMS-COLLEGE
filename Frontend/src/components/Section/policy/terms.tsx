import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const TermsAndConditions: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '64px' }}>
      <Paper elevation={6} style={{ padding: '32px', borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#0d3035' }}>
            Terms and Conditions
          </Typography>
        </Box>
        <Typography variant="body1" style={{ lineHeight: '1.6', color: '#0e606e' }}>
          Welcome to our website. If you continue to browse and use this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Use of the Website
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          By accessing or using our website, you agree to these terms. If you disagree with any part of these terms, please do not use our website.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Intellectual Property
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          All content on this website, including text, graphics, logos, and images, is the property of [Your Company Name]. You are not permitted to reproduce or distribute any material without prior written consent.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          We are not liable for any damages or losses arising from the use or inability to use this site. Your use of any information or materials on this website is entirely at your own risk.
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsAndConditions;
