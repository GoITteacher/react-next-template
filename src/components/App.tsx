import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import { getArticles } from "../services/articleService";
import { Article } from "../types/article";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = async (newTopic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const newArticles = await getArticles(newTopic);
      setArticles(newArticles);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <strong>Something went wrong please try again...</strong>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
