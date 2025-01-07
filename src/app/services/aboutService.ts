import axiosClient from "../api/axiosClient";

const aboutService = {
  async getAll() {
    const response = await axiosClient.get('/api/about');
    return response.data.data;
  }
}

export default aboutService;