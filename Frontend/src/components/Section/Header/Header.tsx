import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Menu,
  MenuItem,
  Box,
  IconButton,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import CustomLink from "../CustomLink/Links";
import TabWithPopup from "../../PopupForm/PopupForm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import { FormData } from "../../Home/Home";
import { logo2, Prospectus } from "../../../assets";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [formFilled, setFormFilled] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const academicsAnchorRef = useRef(null);

  useEffect(() => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      setFormFilled(true);
    } else {
      // Automatically open the form if it hasn't been filled out
      setIsOpen(true);
    }
  }, []);

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

  const handleLinkClick = (link: string) => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      window.location.href = link;
    } else {
      setIsOpen(true);
    }
  };

  const handleMenuToggle = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setMenuOpen(false);
  };

  const handleAcademicsMenuToggle = (): void => {
    setAcademicsMenuOpen((prev) => !prev);
  };

  const renderMenuItems = () => (
    <>
      <MenuItem onClick={() => handleLinkClick("/")}>
        <Typography>HOME</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/aboutUs")}>
        <Typography>ABOUT US</Typography>
      </MenuItem>
      <MenuItem onClick={handleAcademicsMenuToggle}>
        <Typography>ACADEMICS</Typography>
        <ArrowDropDownIcon />
      </MenuItem>
      {academicsMenuOpen && (
        <Box ml={2}>
          <MenuItem onClick={() => handleLinkClick("/programs")}>
            <Typography>PROGRAMS</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick("/research")}>
            <Typography>RESEARCH</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick("/faculty")}>
            <Typography>FACULTY</Typography>
          </MenuItem>
        </Box>
      )}
      <MenuItem onClick={() => handleLinkClick("/neetupdates")}>
        <Typography>NEET UPDATES</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/apply-and-enroll")}>
        <Typography>APPLY NOW</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/user/login")}>
        <Typography>LOGIN</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/images/kimsProspectus")}>
        <Typography>PROSPECTUS</Typography>
      </MenuItem>
    </>
  );

  const renderMobileMenu = () => (
    <Drawer anchor="right" open={menuOpen} onClose={handleClose}>
      <Box sx={{ width: 250, pt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 1 }}>
          <IconButton onClick={handleMenuToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        {renderMenuItems()}
      </Box>
    </Drawer>
  );

  const renderDesktopNav = () => (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        height: "5vh",
        alignItems: "center",
      }}
    >
      <MenuItem onClick={() => handleLinkClick("/")}>
        <Typography variant="body2" color="inherit">
          HOME
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/aboutUs")}>
        <Typography variant="body2" color="inherit">
          ABOUT US
        </Typography>
      </MenuItem>
      <MenuItem ref={academicsAnchorRef} onClick={handleAcademicsMenuToggle}>
        <Typography variant="body2" color="inherit">
          ACADEMICS
        </Typography>
        <ArrowDropDownIcon />
      </MenuItem>
      <Menu
        open={academicsMenuOpen}
        onClose={() => setAcademicsMenuOpen(false)}
        anchorEl={academicsAnchorRef.current}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={() => handleLinkClick("/programs")}>
          <Typography variant="body2">PROGRAMS</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick("/research")}>
          <Typography variant="body2">RESEARCH</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick("/faculty")}>
          <Typography variant="body2">FACULTY</Typography>
        </MenuItem>
      </Menu>
      <MenuItem onClick={() => handleLinkClick("/neetupdates")}>
        <Typography variant="body2" color="inherit">
          NEET UPDATES
        </Typography>
      </MenuItem>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <CustomLink href="/apply-and-enroll">
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "black" }}
          >
            APPLY NOW
          </Button>
        </CustomLink>
        <CustomLink href="/user/login">
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "black" }}
          >
            LOGIN
          </Button>
        </CustomLink>
        <Button
          onClick={() => handleLinkClick(Prospectus)}
          variant="outlined"
          size="small"
          style={{ color: "black", borderColor: "black" }}
        >
          <DownloadIcon style={{ color: "black" }} />
          PROSPECTUS
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: { sm: "100%", md: "95%", lg: "1200px" },
        margin: "0 auto",
        pb: "2vh",
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <img src={logo2} alt="Logo" style={{ height: isMobile ? 30 : 40 }} />
      </Box>
      {isMobile || isMedium ? (
        <>
          <IconButton onClick={handleMenuToggle} size="small">
            <MenuIcon />
          </IconButton>
          {renderMobileMenu()}
        </>
      ) : (
        renderDesktopNav()
      )}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 40,
          right: isMobile ? 20 : 40,
          zIndex: 20,
        }}
      >
        <Stack direction="column" spacing={1} alignItems="center">
          <IconButton
            href="https://wa.me/918420461369"
            target="_blank"
            sx={{
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50%",
              width: isMobile ? 48 : 64,
              height: isMobile ? 48 : 64,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: isMobile ? 28 : 40 }} />
          </IconButton>

          <>
            <Button
              variant="outlined"
              startIcon={<PhoneIcon />}
              href="tel:+918017508002"
              size="small"
              sx={{
                color: "white",
                backgroundColor: "#28a745",
                "&:hover": { backgroundColor: "#218838" },
              }}
            >
              IVR 1
            </Button>
            <Button
              variant="outlined"
              startIcon={<PhoneIcon />}
              href="tel:+917477798949"
              size="small"
              sx={{
                color: "white",
                backgroundColor: "#28a745",
                "&:hover": { backgroundColor: "#218838" },
              }}
            >
              IVR 2
            </Button>
          </>
        </Stack>
      </motion.div>
      <TabWithPopup
        isOpen={isOpen}
        onSubmit={handleSubmit}
        formFilled={formFilled}
        onFormChange={handleFormChange}
      />
    </Box>
  );
};

export default Header;
