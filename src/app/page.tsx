import { Box, Container, Typography, Button } from "@mui/material";
import ArticleDetail from "./components/ArticleDetail";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <div className="page-grey">
        {/* Banner section */}
        <Box
          sx={{
            minHeight: "380px",
            backgroundImage: "url('assets/img/banner-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: 12,
            gap: 3,
            px: 8,
          }}
          className="banner"
        >
          <div className="banner-content">
            <Typography variant="h6">Welcome To Cyborg</Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              <span className="banner-content__text">Browse</span> Our Popular
              Games Here
            </Typography>
            <Button variant="contained" href="browse.html" sx={{ mt: 2 }}>
              Browse Now
            </Button>
          </div>
        </Box>
        <div className="page-black">
          {/* Most Popular Section */}
          <Box sx={{ mb: 6 }} className="popular">
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              className="popular-title"
              color="primary"
            >
              <span className="popular-title__text">Most Popular</span> Right
              Now
            </Typography>

            <ArticleDetail />

            <Box textAlign="center" sx={{ mt: 3 }}>
              <Button variant="contained" href="browse.html">
                Discover Popular
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </Container>
  );
}
