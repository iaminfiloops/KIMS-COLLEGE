import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: any;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  // Splitting the message to format the phone number separately
  const [mainMessage, phoneNumber] = message.split(":");
  console.log(mainMessage)
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "400px",
          margin: "auto",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          padding: "16px",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Your Response Has Been Recorded
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "16px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{ marginBottom: "16px", color: "text.secondary" }}
        >
          Our College Representative will call you back soon. You can also reach
          them at the following number:
        </Typography>
        <Box
          sx={{
            backgroundColor: "background.paper",
            padding: "12px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "inline-block",
          }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            {phoneNumber}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          padding: "8px",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            padding: "8px 16px",
            borderRadius: "8px",
            textTransform: "none",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationPopup;
