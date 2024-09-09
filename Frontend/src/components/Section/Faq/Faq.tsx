
import React from "react";
import { Container, Typography, Paper, Box, List, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQPage: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '64px' }}>
      <Paper elevation={6} style={{ padding: '32px', borderRadius: '12px', backgroundColor: '#f5f5f5' }}>
        <Box style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#0d3035' }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" style={{ marginBottom: '24px', lineHeight: '1.6', color: '#0e606e' }}>
            Find answers to some of the most commonly asked questions about our programs and courses.
          </Typography>
        </Box>
        <List style={{ padding: 0 }}>
          <Accordion elevation={3} style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ backgroundColor: '#0e606e', color: '#ffffff', borderRadius: '12px 12px 0 0' }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#ffffff' }}>What are the eligibility criteria for MBBS?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f5f5f5', borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1" style={{ color: '#0e606e' }}>
                Candidates must have at least 50% marks in Physics, Chemistry, Biology, and English in their 10+2 examinations and must qualify in the National Eligibility Entrance Test (NEET).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={3} style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
              aria-controls="panel2a-content"
              id="panel2a-header"
              style={{ backgroundColor: '#0e606e', color: '#ffffff', borderRadius: '12px 12px 0 0' }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#ffffff' }}>What is the duration of the B.Pharmacy course?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f5f5f5', borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1" style={{ color: '#0e606e' }}>
                The Bachelor of Pharmacy (B.Pharmacy) course is a 4-year undergraduate program.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={3} style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
              aria-controls="panel3a-content"
              id="panel3a-header"
              style={{ backgroundColor: '#0e606e', color: '#ffffff', borderRadius: '12px 12px 0 0' }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#ffffff' }}>What are the career opportunities after completing B.Sc. Nursing?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f5f5f5', borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1" style={{ color: '#0e606e' }}>
                Graduates can work in hospitals, clinics, community health centers, and nursing homes. They can also pursue higher studies or specialize in specific areas of nursing.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={3} style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
              aria-controls="panel4a-content"
              id="panel4a-header"
              style={{ backgroundColor: '#0e606e', color: '#ffffff', borderRadius: '12px 12px 0 0' }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#ffffff' }}>What is the admission process for PG-MD/MS?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f5f5f5', borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1" style={{ color: '#0e606e' }}>
                Candidates must have completed MBBS and qualified in the entrance exam specific to the PG-MD/MS course. Admission is based on the performance in the entrance exam and interview.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={3} style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
              aria-controls="panel5a-content"
              id="panel5a-header"
              style={{ backgroundColor: '#0e606e', color: '#ffffff', borderRadius: '12px 12px 0 0' }}
            >
              <Typography variant="h6" style={{ fontWeight: 'bold', color: '#ffffff' }}>What are the job prospects after GNM?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: '#f5f5f5', borderRadius: '0 0 12px 12px' }}>
              <Typography variant="body1" style={{ color: '#0e606e' }}>
                GNM graduates can find employment in hospitals, clinics, nursing homes, and community health centers. They can also pursue higher studies in nursing or healthcare management.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </List>
      </Paper>
    </Container>
  );
};

export default FAQPage;
