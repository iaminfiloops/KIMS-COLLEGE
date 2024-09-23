import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '64px' }}>
      <Paper elevation={6} style={{ padding: '32px', borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#0d3035' }}>
            Privacy Policy
          </Typography>
        </Box>
        <Typography variant="body1" style={{ lineHeight: '1.6', color: '#0e606e' }}>
          We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we handle your personal information and your privacy rights.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Information We Collect
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          We may collect personal information such as your name, email address, contact details, and other details when you interact with our site. This information is collected to provide a personalized experience.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          Your data will be used to provide you with the requested services, such as course information and updates, and to enhance your experience on our site. We may also use your information for marketing purposes with your consent.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Sharing Your Data
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          We do not sell or share your personal data with third parties unless it is required to provide the services you have requested or comply with legal obligations.
        </Typography>
        <Typography variant="h6" style={{ marginTop: '24px', color: '#0d3035' }}>
          Your Rights
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '16px', color: '#0e606e' }}>
          You have the right to access, correct, or delete your personal information. If you have any concerns about your data privacy, please contact us at support@kimscollege.com.
        </Typography>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
