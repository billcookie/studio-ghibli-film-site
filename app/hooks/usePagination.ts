import { useState } from 'react';
import { Movie } from '../types';

export const usePagination = (data: Movie[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const indexOfLastMovie = currentPage * itemsPerPage
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  )

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage)

  return {
    movies: currentMovies,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
  }
}
