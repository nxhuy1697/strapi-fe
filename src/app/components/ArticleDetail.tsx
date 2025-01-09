"use client"
import React, { useEffect, useState } from "react";
import articleService from "../services/articleService";
import { Article } from "../components/dataTypes/ArticleData";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ArticleDetail: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await articleService.getAllArticle();
        console.log("API Response Data:", data); // Log dữ liệu trả về từ API
        setArticles(data.map((item:any) => ({
          id:item.id,
          title: item.title,
          description: item.description,
          cover: item.cover.url
        })));
      } catch(error) {
        console.error("Failed to fetch articles:", error);
      }
    };
    fetchArticles();
  }, []);
  return   <div>
  <Grid container spacing={4}>
    {articles.map((article, index) => (
      <Grid item xs={12} sm={6} md={3} key={article.id}>
        <Card
          sx={{
            backgroundColor: "#27292a",
            color: "#fff",
            mt: "20px",
            height: "100%",
            padding: "9px"
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:1337${article.cover}`}
            alt={article.title}
            sx={{ borderRadius: 4 }}
          />
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography variant="body2" color="secondary">
              {article.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</div>
};

export default ArticleDetail;
