//components/navbar/navbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Link,
  Box,
  styled
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "40%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  },
  [theme.breakpoints.down("xs")]: {
    width: "70%",
    margin: "0 auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const NavLinksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    display: "none"
  }
}));

const NavLinks = styled(Link)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  color: "black",
  "&:hover": {
    textDecoration: "underline"
  }
}));

const NavigationBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#f5f5f5" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ color: "black" }}>
          <span
            css={{
              display: "inline-block",
              position: "relative",
              "&:hover": {
                animation:
                  "$bulge-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
              }
            }}
          >
            JatBlog
          </span>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "black" }} />
          </SearchIconWrapper>
          <SearchInput placeholder="Search…" />
        </Search>
        <NavLinksWrapper>
          <NavLinks href="/" underline="none">
            <Typography variant="h6">Home</Typography>
          </NavLinks>
          <NavLinks href="/news" underline="none">
            <Typography variant="h6">News</Typography>
          </NavLinks>
          <NavLinks href="/about" underline="none">
            <Typography variant="h6">About</Typography>
          </NavLinks>
        </NavLinksWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
