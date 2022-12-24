import axios from 'axios';
import NewsSearchForm from 'components/NewsSearchForm/NewsSearchForm.jsx';

import React, { useState, useEffect } from 'react';

axios.defaults.headers.common['Authorization'] =
  'Bearer 4330ebfabc654a6992c2aa792f3173a3';

const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

export default function News() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quary, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ searchQuery: quary, currentPage })
      .then(responseArticles => {
        setArticles(prevArticles => [...prevArticles, responseArticles]);
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
    fetchArticles();
  }, [quary, currentPage]);

  const onChangeQuery = query => {
    setQuery(quary);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };
  const updatePage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;
  return (
    <div>
      {error && <h1>Ой ошибка, всё пропало!!!</h1>}

      <NewsSearchForm onSubmit={onChangeQuery} />

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={updatePage}>
          Загрузить ещё
        </button>
      )}

      {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Загружаем...
          <span
            aria-label="Иконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}
          >
            🧙‍♂️
          </span>
        </p>
      )}
    </div>
  );
}
