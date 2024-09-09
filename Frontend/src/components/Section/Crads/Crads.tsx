import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Grid,
} from "@mui/material";
import { Mci, Clause, Courses } from "../../../assets";
const cards = [
  {
    title: "MCI APPROVED",
    description:
      "Board of Governors in Supersession of Medical Council of India approved 150 MBBS Seats for Academic Session 2021-22.",
    image: Mci,
    alt: "MCI approved",
  },
  {
    title: "CLAUSE B.1.11",
    description:
      "Shri Ramkrishna Institute of Medical Sciences, situated in Durgapur, boasts a sprawling campus that spans over 50 acres.",
    image: Clause,
    alt: "Campus",
  },
  {
    title: "COURSES",
    description:
      "We offer a diverse range of courses in medical sciences and engineering, including MBBS ,MD, MS,NURSING,B.PHARMA,B.TECH,GNM,DIPLOMA.",
    image: Courses,
    alt: "Courses",
  },
];

export default function ResponsiveCardGrid() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#333",
          marginBottom: "20px",
          fontFamily: "Roboto",
          fontWeight: 700,
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        WHY CHOOSE US?
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%", // Ensure each grid item takes full width
              }}
            >
              <Card
                sx={{
                  maxWidth: 400,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.alt}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
