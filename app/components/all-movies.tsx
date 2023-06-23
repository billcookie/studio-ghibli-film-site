'use client'
import { Pagination } from "@mantine/core";
import { usePagination } from "../hooks/usePagination";
import { Movie } from "../types";
import MovieCard from "./cards/movie-card";

interface AllMoviesProps {
  data: Movie[]
}

const AllMovies: React.FC<AllMoviesProps> = ({
  data,
}) => {
  const { movies, totalPages, currentPage, handlePageChange } = usePagination(data, 10);
  return (
    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-16">
      {movies.map((movie, idx) => (
        <MovieCard key={`${movie.id}-${idx}`} movie={movie} />
      ))}
      <div>
        <Pagination
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
        size="lg"
      />
      </div>
    </div>
  );
}

export default AllMovies
