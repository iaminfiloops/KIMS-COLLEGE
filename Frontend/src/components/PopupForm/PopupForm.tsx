// import React, { useState, useCallback, useMemo } from "react";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Typography,
//   Box,
//   createTheme,
//   ThemeProvider,
// } from "@mui/material";
// import { useEffect } from "react";
// import { leadRegister } from "../../app/leads/leadSlice";
// import { AppDispatch } from "../../store";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import { states } from "./state";
// import { auth } from "../../firebase/firebaseConfig";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   ConfirmationResult,
// } from "firebase/auth";

// interface TabWithPopupProps {
//   isOpen: boolean;
//   formFilled: boolean;
//   onSubmit: (data: FormData) => void;
//   onFormChange: (data: { name: string; email: string }) => void;
//   onClose?: () => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   course: string;
//   place: string;
// }

// declare global {
//   interface Window {
//     recaptchaVerifier: RecaptchaVerifier;
//   }
// }

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0035B3", // Set primary color to the provided color
//     },
//   },
// });

// const TabWithPopup: React.FC<TabWithPopupProps> = ({
//   isOpen,
//   onSubmit,
//   onFormChange,
//   onClose,
// }) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     course: "",
//     place: "",
//   });
//   const [phoneError, setPhoneError] = useState<string | null>(null);
//   const [emailError, setEmailError] = useState<string | null>(null);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] =
//     useState<ConfirmationResult | null>(null);
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);
//   const [verificationInProgress, setVerificationInProgress] = useState(false);

//   const handleChange = useCallback(
//     (e: any) => {
//       const { name, value } = e.target;

//       setFormData((prev) => ({
//         ...prev,
//         [name as string]: value as string,
//       }));

//       if (name === "phoneNumber") {
//         const isValidPhoneNumber = /^\d{10}$/.test(value as string);
//         setPhoneError(
//           isValidPhoneNumber ? null : "Phone number must be 10 digits."
//         );
//       }
//       if (name === "email") {
//         const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string);
//         setEmailError(
//           isValidEmail ? null : "Please enter a valid email address."
//         );
//       }
//       onFormChange({
//         name: formData.name,
//         email: formData.email,
//       });
//     },
//     [formData.name, formData.email, onFormChange]
//   );

//   const setupRecaptcha = useCallback(() => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "recaptcha-container",
//         {
//           size: "invisible",
//         }
//       );
//     }
//   }, []);

//   const sendOtp = useCallback(async () => {
//     if (!phoneError && formData.phoneNumber) {
//       try {
//         setVerificationInProgress(true);
//         setupRecaptcha();
//         const phoneNumber = "+91" + formData.phoneNumber;
//         const appVerifier = window.recaptchaVerifier;
//         const confirmation = await signInWithPhoneNumber(
//           auth,
//           phoneNumber,
//           appVerifier
//         );
//         setConfirmationResult(confirmation);
//         setOtpSent(true);
//         toast.success("OTP sent successfully!");
//       } catch (error) {
//         console.error("Error sending OTP:", error);
//         toast.error("Failed to send OTP. Please try again.");
//       } finally {
//         setVerificationInProgress(false);
//       }
//     }
//   }, [phoneError, formData.phoneNumber, setupRecaptcha]);

//   const verifyOtp = useCallback(async () => {
//     if (confirmationResult && otp) {
//       try {
//         setVerificationInProgress(true);
//         await confirmationResult.confirm(otp);
//         toast.success("Phone number verified successfully!");
//         setIsPhoneVerified(true);
//       } catch (error) {
//         console.error("Error verifying OTP:", error);
//         toast.error("Invalid OTP. Please try again.");
//       } finally {
//         setVerificationInProgress(false);
//       }
//     }
//   }, [confirmationResult, otp]);

//   useEffect(() => {
//     if (!phoneError && formData.phoneNumber.length === 10 && !otpSent) {
//       sendOtp();
//     }
//   }, [formData.phoneNumber, phoneError, otpSent, sendOtp]);

//   useEffect(() => {
//     if (otp.length === 6 && !isPhoneVerified) {
//       verifyOtp();
//     }
//   }, [otp, isPhoneVerified, verifyOtp]);

//   const handleSubmit = useCallback(async () => {
//     if (
//       !phoneError &&
//       formData.name &&
//       formData.email &&
//       formData.phoneNumber &&
//       formData.course &&
//       formData.place &&
//       isPhoneVerified
//     ) {
//       onSubmit(formData);
//       try {
//         await dispatch(leadRegister(formData));
//         toast.success("Form submitted successfully!");
//       } catch (err: any) {
//         toast.error(err.message || "Something went wrong. Please try again.");
//       } finally {
//         setFormData({
//           name: "",
//           email: "",
//           phoneNumber: "",
//           course: "",
//           place: "",
//         });
//         setOtpSent(false);
//         setOtp("");
//         setIsPhoneVerified(false);
//       }
//     } else {
//       toast.error(
//         "Please fill out the form correctly and verify your phone number."
//       );
//     }
//   }, [dispatch, formData, isPhoneVerified, phoneError, onSubmit]);

//   const isFormValid = useMemo(() => {
//     return (
//       !phoneError &&
//       !emailError &&
//       formData.name &&
//       formData.email &&
//       formData.phoneNumber &&
//       formData.course &&
//       formData.place &&
//       isPhoneVerified
//     );
//   }, [emailError, formData, isPhoneVerified, phoneError]);

//   return (
//     <ThemeProvider theme={theme}>
//       <Dialog open={isOpen} onClose={onClose}>
//         <DialogTitle>Fill the Form</DialogTitle>
//         <DialogContent>
//           <Box component="form" noValidate autoComplete="off">
//             <TextField
//               autoFocus
//               margin="dense"
//               name="name"
//               label="Name"
//               type="text"
//               fullWidth
//               variant="outlined"
//               value={`${formData.name}`}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               margin="dense"
//               name="email"
//               label="Email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               value={formData.email}
//               onChange={handleChange}
//               error={!!emailError}
//               helperText={emailError}
//               required
//             />
//             <TextField
//               margin="dense"
//               name="phoneNumber"
//               label="Mobile Number"
//               type="tel"
//               fullWidth
//               variant="outlined"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               error={!!phoneError}
//               helperText={phoneError}
//               required
//             />
//             {otpSent && !isPhoneVerified && (
//               <Box mt={2}>
//                 <TextField
//                   margin="dense"
//                   name="otp"
//                   label="Enter OTP"
//                   type="text"
//                   fullWidth
//                   variant="outlined"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </Box>
//             )}
//             {verificationInProgress && (
//               <Typography color="primary" mt={2} mb={2}>
//                 Processing...
//               </Typography>
//             )}
//             {isPhoneVerified && (
//               <Typography color="success" mt={2} mb={2}>
//                 Verified! 📞✅
//               </Typography>
//             )}
//             <FormControl fullWidth margin="dense">
//               <InputLabel id="course-label">Course</InputLabel>
//               <Select
//                 labelId="course-label"
//                 id="course"
//                 name="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 label="Course"
//                 required
//               >
//                 <MenuItem value="Pg(Md/Ms)">Pg(Md/Ms)</MenuItem>
//                 <MenuItem value="MBBS">MBBS</MenuItem>
//                 <MenuItem value="Bsc.nursing">Bsc.nursing</MenuItem>
//                 <MenuItem value="Gnm">Gnm</MenuItem>
//                 <MenuItem value="B.pharma">B.pharma</MenuItem>
//                 <MenuItem value="B.tech">B.tech</MenuItem>
//                 <MenuItem value="B.tech lateral">B.tech lateral</MenuItem>
//                 <MenuItem value="Diploma">Diploma</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl fullWidth margin="dense">
//               <InputLabel id="place-label">Place</InputLabel>
//               <Select
//                 labelId="place-label"
//                 id="place"
//                 name="place"
//                 value={formData.place}
//                 onChange={handleChange}
//                 label="Place"
//                 required
//               >
//                 {states.map((state) => (
//                   <MenuItem key={state} value={state}>
//                     {state}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={handleSubmit}
//             disabled={!isFormValid}
//             variant="contained"
//             sx={{
//               bgcolor: "#0035B3",
//               color: "white",
//               "&:hover": {
//                 bgcolor: "#002188",
//               },
//             }}
//           >
//             Submit
//           </Button>
//         </DialogActions>
//         <div id="recaptcha-container"></div>
//       </Dialog>
//     </ThemeProvider>
//   );
// };

// export default React.memo(TabWithPopup);


// No Otp Verification

import React, { useState, useCallback, useMemo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { leadRegister } from "../../app/leads/leadSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { states } from "./state";

interface TabWithPopupProps {
  isOpen: boolean;
  formFilled: boolean;
  onSubmit: (data: FormData) => void;
  onFormChange: (data: { name: string; email: string }) => void;
  onClose?: () => void;
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  course: string;
  place: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0035B3", // Set primary color to the provided color
    },
  },
});

const TabWithPopup: React.FC<TabWithPopupProps> = ({
  isOpen,
  onSubmit,
  onFormChange,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
    place: "",
  });
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: any) => {
      const { name, value } = e.target as HTMLInputElement;

      setFormData((prev) => ({
        ...prev,
        [name as string]: value as string,
      }));

      if (name === "phoneNumber") {
        const isValidPhoneNumber = /^\d{10}$/.test(value as string);
        setPhoneError(
          isValidPhoneNumber ? null : "Phone number must be 10 digits."
        );
      }
      if (name === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string);
        setEmailError(
          isValidEmail ? null : "Please enter a valid email address."
        );
      }
      onFormChange({
        name: formData.name,
        email: formData.email,
      });
    },
    [formData.name, formData.email, onFormChange]
  );

  const handleSubmit = useCallback(async () => {
    if (
      !phoneError &&
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.course &&
      formData.place
    ) {
      try {
        await dispatch(leadRegister(formData));
        toast.success("Form submitted successfully!");
        onSubmit(formData);
      } catch (err: any) {
        toast.error(err.message || "Something went wrong. Please try again.");
      } finally {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          course: "",
          place: "",
        });
      }
    } else {
      toast.error(
        "Please fill out the form correctly."
      );
    }
  }, [dispatch, formData, phoneError, onSubmit]);

  const isFormValid = useMemo(() => {
    return (
      !phoneError &&
      !emailError &&
      formData.name &&
      formData.email &&
      formData.phoneNumber &&
      formData.course &&
      formData.place
    );
  }, [emailError, formData, phoneError]);

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Fill the Form</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!emailError}
              helperText={emailError}
              required
            />
            <TextField
              margin="dense"
              name="phoneNumber"
              label="Mobile Number"
              type="tel"
              fullWidth
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!phoneError}
              helperText={phoneError}
              required
            />
            <FormControl fullWidth margin="dense">
              <InputLabel id="course-label">Course</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                label="Course"
                required
              >
                <MenuItem value="Pg(Md/Ms)">Pg(Md/Ms)</MenuItem>
                <MenuItem value="MBBS">MBBS</MenuItem>
                <MenuItem value="Bsc.nursing">Bsc.nursing</MenuItem>
                <MenuItem value="Gnm">Gnm</MenuItem>
                <MenuItem value="B.pharma">B.pharma</MenuItem>
                <MenuItem value="B.tech">B.tech</MenuItem>
                <MenuItem value="B.tech lateral">B.tech lateral</MenuItem>
                <MenuItem value="Diploma">Diploma</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel id="place-label">Place</InputLabel>
              <Select
                labelId="place-label"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
                label="Place"
                required
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            variant="contained"
            sx={{
              bgcolor: "#0035B3",
              color: "white",
              "&:hover": {
                bgcolor: "#002188",
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default React.memo(TabWithPopup);
