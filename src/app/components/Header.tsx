"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Browse", "Details", "Streams", "Profile"];
export default function Header() {
  return (
    <AppBar sx={{ border: "0", background: "#1f2122", boxShadow: "0" }}>
      <Toolbar>
        {/* logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img src="assets/img/logo.png" alt="Logo" style={{ height: 40 }} />
        </Box>
        {/* search  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 13,
            px: 1,
            py: 0.5,
          }}
          bgcolor="#27292a"
        >
          <IconButton aria-label="search">
            <SearchIcon color="secondary" />
          </IconButton>
          <InputBase
            placeholder="Type Something"
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        {/* nav menu  */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3 }}>
          {pages.map((page) => (
            <Link
              key={page}
              href={`/${page.toLowerCase()}`}
              style={{ textDecoration: "none", margin: "0 8px" }} // Loại bỏ gạch chân
            >
              <Typography
                variant="body1"
                color="secondary"
                sx={{
                  cursor: "pointer",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  "&:hover": { color: "primary.main" , transform: "scale(1.05)" },
                }}
              >
                {page}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
