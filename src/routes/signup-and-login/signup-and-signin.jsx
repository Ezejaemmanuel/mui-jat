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

const SignupForm = () => {
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().when("/", {
          is: "/signup",
          then: Yup.string().required("Required"),
          otherwise: Yup.string()
        }),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Password must be at least 8 characters long")
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {window.location.pathname === "/signup" ? (
            <Field
              name="username"
              render={({ field }) => (
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Username"
                  {...field}
                  error={touched.username && errors.username}
                  helperText={touched.username && errors.username}
                />
              )}
            />
          ) : null}
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
            <Bounce bottom>
              <Button
                variant="contained"
                type="submit"
                size={isMobile ? "medium" : "large"}
                endIcon={<EmojiEmotions />}
              >
                {window.location.pathname === "/signup" ? "Sign Up" : "Log In"}
              </Button>
            </Bounce>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};

const AuthPage = () => {
  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Title variant="h1">Welcome to my App</Title>
          <Subtitle variant="h2">
            {window.location.pathname === "/signup"
              ? "Sign up to get started"
              : "Log in to continue"}
          </Subtitle>
          <SignupForm />
        </Container>
      </HeroSection>
    </>
  );
};

export default AuthPage;
