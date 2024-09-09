import React from "react";
import {
  Container,
  Typography,
  Box,
  // Grid,
  // Card,
  // CardMedia,
  // CardContent,
} from "@mui/material";
// import { motion } from "framer-motion";
// import { BlackLogo, Bonapart, HeroBannerA, Tapan } from "../../../assets";

const AboutUs: React.FC = () => {
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Sri TAPAN Kr. POBI",
  //     position: "Founder Trustee",
  //     description:
  //       "Sri TAPAN Kr. POBI is the founder trustee, dedicated to establishing and guiding our institution.",
  //     image: Tapan,
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. BONAPART",
  //     position: "Chief Executive Officer",
  //     description:
  //       "Dr. BONAPART CHOWDHURY leads the institution with a vision for excellence",
  //     image: Bonapart,
  //   },
  // ];

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4} textAlign="center">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={BlackLogo}
            alt="Company Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
        </motion.div> */}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ color: "#0E606E", marginBottom: "20px" }}
        >
          About Us
        </Typography>
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroBannerA}
            alt="Hero"
            style={{
              width: "100%", // Full width for smaller screens
              maxWidth: "100%", // Ensure it doesn't exceed its container width
              height: "auto", // Auto height to maintain aspect ratio
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div> */}
        <Typography
          paragraph
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: "#0E606E", marginBottom: "20px" }}
        >
          Krishnanagar Institute of Medical Science
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ color: "#757575", fontSize: "1.1rem", lineHeight: "1.6" }}
        >
          Krishnanagar Institute of Medical Science, established in [Current
          Year], is a pioneering institution dedicated to providing top-tier
          medical education and healthcare services. As we welcome our first
          batch of aspiring doctors, we are committed to fostering an
          environment that emphasizes both excellence in medical knowledge and
          the development of essential qualities such as leadership, compassion,
          and empathy. Our state-of-the-art infrastructure, situated on a lush
          green campus spanning over 20 acres, includes a comprehensive medical
          college and a 385-bed super specialty hospital. This facility is
          designed to serve the underprivileged sections of society with the
          highest standards of healthcare, embodying our motto, "Skill to heal,
          Spirit to care."
        </Typography>
        {/* <Grid container spacing={4} mt={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={member.id}
              style={{
                display: "flex",
                justifyContent: "center", // Center all items on small screens
                alignItems: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card style={{ backgroundColor: "#ffffff", maxWidth: "300px" }}>
                  <CardMedia
                    component="img"
                    style={{
                      height: "auto",
                      width: "auto",
                      objectFit: "cover",
                    }}
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "#3f51b5" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      style={{
                        color: "#e91e63", // Highlight color
                        fontWeight: "bold", // Bold text
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#757575" }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Container>
  );
};

export default AboutUs;
