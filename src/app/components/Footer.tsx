import { Box, Container, Typography,Link } from '@mui/material'

import React from 'react'

export default function Footer() {
  return (
    <Box sx={{
        backgroundColor: "#1f2122",
        color: "#fff",
        py: 3,
        textAlign: "center",
      }}>
        <Container>
        <Typography variant="body2">
          Copyright © 2036{" "}
          <Link href="#" color="primary" underline="hover">
            Cyborg Gaming
          </Link>{" "}
          Company. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Design:{" "}
          <Link
            href="https://templatemo.com"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            underline="hover"
          >
            TemplateMo
          </Link>
        </Typography>
        </Container>
    </Box>
  )
}
