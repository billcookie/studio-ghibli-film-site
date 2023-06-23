'use client'
import { Pagination } from "@mantine/core";
import { usePagination } from "../hooks/usePagination";
import { Movie } from "../types";
import MovieCard from "./cards/movie-card";
import { useState } from "react";
import { Input } from "@mantine/core";

interface AllMoviesProps {
  data: Movie[]
}

const AllMovies: React.FC<AllMoviesProps> = ({
  data,
}) => {
  const { movies, totalPages, currentPage, handlePageChange } = usePagination(data, 10)
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="mb-4">
        <Input
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-16">
        {filteredMovies.map((movie, idx) => (
          <MovieCard key={`${movie.id}-${idx}`} movie={movie} />
        ))}

      </div>
      <div>
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={handlePageChange}
            size="lg"
          />
        </div>
    </>
  );
}

export default AllMovies
