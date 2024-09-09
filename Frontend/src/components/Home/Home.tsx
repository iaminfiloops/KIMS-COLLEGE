import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TabWithPopup from "../PopupForm/PopupForm";
import ActionAreaCard from "../Section/Crads/Crads";
import { HeroBannerH } from "../../assets";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Shri Ramkrishna Institute of Medical Sciences and Sanaka Hospital",
    description:
      "Shri Ramkrishna Institute of Medical Sciences and Sanaka Hospital is a private medical college located in Durgapur, West Bengal. It was established in 2019.",
    image: HeroBannerH,
    link: "/aboutUs",
  },
];

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const CarouselComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      setFormFilled(true);
    }
  }, []);

  const handleOpen = useCallback(() => {
    if (!formFilled) {
      setIsOpen(true);
    } else {
      console.log("The form is already filled. Popup is disabled.");
    }
  }, [formFilled]);

  const handleSubmit = (formData: FormData) => {
    const hasContent =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phoneNumber.trim() !== "";

    if (hasContent) {
      setFormFilled(true);
      localStorage.setItem("formFilled", "true");
      setIsOpen(false);
    } else {
      alert("Form is not filled out completely. Please fill it out.");
    }
  };

  const handleFormChange = useCallback(
    (data: { name: string; email: string }) => {
      setFormFilled(data.name !== "" && data.email !== "");
    },
    []
  );

  const nextProduct = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevProduct = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  }, []);

  const handleButtonClick = (link: string) => {
    if (formFilled) {
      window.location.href = link;
    } else {
      handleOpen();
    }
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          width: "100%",
          height: { xs: "60vh", sm: "70vh", md: "80vh", lg: "90vh" },
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pb: "4vh",
          borderRadius: "10px",
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={variants}
            initial="hidden"
            animate={index === currentIndex ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: index === currentIndex ? 1 : 0,
              opacity: index === currentIndex ? 1 : 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  color: "#fff",
                  padding: { xs: 2, sm: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "90%",
                  }}
                >
                  <Typography
                    variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
                    sx={{
                      fontWeight: "bold",
                      mb: { xs: 1, sm: 2 },
                      textAlign: "center",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{
                      mb: { xs: 2, sm: 3 },
                      textAlign: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 3, sm: 4 },
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Button
                    onClick={() => handleButtonClick(product.link)}
                    variant="contained"
                    color="primary"
                    size={isMobile ? "small" : "medium"}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Box>
          </motion.div>
        ))}
        <Button
          onClick={prevProduct}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 8, sm: 16 },
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            minWidth: { xs: "30px", sm: "40px" },
            width: { xs: "30px", sm: "40px" },
            height: { xs: "30px", sm: "40px" },
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          &lt;
        </Button>
        <Button
          onClick={nextProduct}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 8, sm: 16 },
            zIndex: 2,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            minWidth: { xs: "30px", sm: "40px" },
            width: { xs: "30px", sm: "40px" },
            height: { xs: "30px", sm: "40px" },
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          &gt;
        </Button>
      </Box>
      <TabWithPopup
        isOpen={isOpen}
        onSubmit={handleSubmit}
        formFilled={formFilled}
        onFormChange={handleFormChange}
      />
      <ActionAreaCard />
    </>
  );
};

export default CarouselComponent;
