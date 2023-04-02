import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { EmojiEmotions } from "@mui/icons-material";
import { Bounce } from "react-reveal";

const HeroSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 64px)",
  backgroundImage: "url(https://source.unsplash.com/1600x900/?nature)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "calc(100vh - 56px)"
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: "bold",
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
    marginBottom: "2rem"
  }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "1rem",
  textAlign: "center",
  marginBottom: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
    marginBottom: "2rem"
  }
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center"
}));

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters long")
});

const SignupForm = () => {
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="name"
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Name"
                {...field}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
              />
            )}
          />
          <Field
            name="email"
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Email"
                {...field}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
            )}
          />
          <Field
            name="password"
            render={({ field }) => (
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Password"
                type="password"
                {...field}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />
            )}
          />
          <ButtonWrapper>
            <Button
              variant="contained

"
              size={isMobile ? "medium" : "large"}
              color="primary"
              type="submit"
              endIcon={<EmojiEmotions />}
            >
              Sign Up
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
export default SignupForm;