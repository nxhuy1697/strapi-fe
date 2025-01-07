import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const games = [
  {
    id: 1,
    title: "Fortnite",
    category: "Sandbox",
    image: "assets/img/popular-01.jpg",
    rating: 4.8,
    downloads: "2.3M",
  },
  {
    id: 2,
    title: "PubG",
    category: "Battle S",
    image: "assets/img/popular-02.jpg",
    rating: 4.8,
    downloads: "2.3M",
  },
  {
    id: 3,
    title: "Dota2",
    category: "Steam-X",
    image: "assets/img/popular-03.jpg",
    rating: 4.8,
    downloads: "2.3M",
  },
  {
    id: 4,
    title: "CS-GO",
    category: "Legendary",
    image: "assets/img/popular-04.jpg",
    rating: 4.8,
    downloads: "2.3M",
  },
];

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
          gap:3,
          px:8
        }}
        className="banner"
      >
        <div className="banner-content">
        <Typography variant="h6" >
          Welcome To Cyborg
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          <span className="banner-content__text" >Browse</span> Our Popular Games Here
        </Typography>
        <Button variant="contained" href="browse.html" sx={{ mt: 2 }}>
          Browse Now
        </Button>

        </div>
      </Box>
        <div className="page-black">
      {/* Most Popular Section */}
      <Box sx={{ mb: 6 }} className="popular">
      <Typography variant="h4" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }} className="popular-title" color="primary" >
          <span className="popular-title__text" >Most Popular</span> Right Now
        </Typography>
        <Grid container spacing={4}  >
          {games.map((game) => (
            <Grid item xs={12} sm={6} md={3} key={game.id}>
              <Card sx={{ backgroundColor: "#27292a", color: "#fff", mt:"20px" }} className="popular-title__items">
                <CardMedia component="img" height="140" image={game.image} alt={game.title} sx={{borderRadius: 4}} />
                <CardContent>
                  <Typography variant="h6">{game.title}</Typography>
                  <Typography variant="body2" color="secondary">{game.category}</Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="body2">
                    ⭐ {game.rating} | 📥 {game.downloads}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Button variant="contained" href="browse.html">Discover Popular</Button>
        </Box>
      </Box>

        </div>

      </div>
    </Container>
  );
}
