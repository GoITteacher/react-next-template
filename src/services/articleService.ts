import axios from "axios";
import { Article } from "../types/article";

interface GetArticlesRes {
  hits: Article[];
}

export const getArticles = async (topic: string) => {
  const res = await axios.get<GetArticlesRes>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  return res.data.hits;
};
