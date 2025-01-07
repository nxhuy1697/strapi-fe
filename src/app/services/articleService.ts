import axiosClient from "../api/axiosClient";

const articleService = {
  async getAllArticle() {
    const response = await axiosClient.get("/articles?populate=*");
    return response.data;
  },
  async getArticleById(id: number) {
    const response = await axiosClient.get(`/articles/${id}?populate=*`);
    return response.data;
  }
};

export default articleService;


