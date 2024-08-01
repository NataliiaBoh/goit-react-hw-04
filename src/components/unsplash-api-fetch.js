import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "QV1H_noQH4EQxXXbFhQ5xVTsiltx33_mcHw4l87O3jc";

export default async function getPhotos(searchQuery, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data;
}
