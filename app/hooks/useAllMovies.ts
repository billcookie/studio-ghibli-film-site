import { useEffect, useState } from 'react';

export const useAllMovies = (perPage: number) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const data = await response.json();
        setMovies(data);
        console.log('movies', data);
      } catch (error) {
        console.error('Cannot get movies', error);
      }
    };
    fetchMovies();
  }, []);

  const indexOfLastMovie = currentPage * perPage;
  const indexOfFirstMovie = indexOfLastMovie - perPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / perPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return { movies: currentMovies, totalPages, currentPage, handlePageChange };
};
