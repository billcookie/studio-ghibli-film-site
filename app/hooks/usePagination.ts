import { useEffect, useState } from 'react';
import { Movie } from '../types';

export const usePagination = (movies: Movie[], perPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMovie = currentPage * perPage;
  const indexOfFirstMovie = indexOfLastMovie - perPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / perPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return { movies: currentMovies, totalPages, currentPage, handlePageChange };
};
