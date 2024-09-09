import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Link, Grid } from "@mui/material";

const NewsComponent: React.FC = () => {
  const [news, setNews] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news", {
          params: {
            apikey: "pub_4744926065ba90b82c1ca0b6f9edcc2113c13",
            q: "NEET EXAM Updates",
          },
        });
        setNews(response.data.results || []);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError("Failed to fetch news. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <Typography
        variant="h4"
        align="center"
        style={{ color: "#0e606e", fontWeight: "bold", marginBottom: "20px" }}
      >
        Latest NEET Exam Updates
      </Typography>

      {error ? (
        <Typography color="error" align="center" variant="h6">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {news.map((article, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                elevation={3}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold", color: "#0e606e" }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginTop: 10, lineHeight: "1.6" }}
                  >
                    {article.description}
                  </Typography>
                </CardContent>
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "#0e606e",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  Read more
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default NewsComponent;
