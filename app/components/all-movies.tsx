'use client'
import { Pagination } from "@mantine/core";
import { usePagination } from "../hooks/usePagination";
import { Movie } from "../types";
import MovieCard from "./movie-card";

interface AllMoviesProps {
  data: Movie[]
}

const AllMovies: React.FC<AllMoviesProps> = ({
  data,
}) => {
  const { movies, totalPages, currentPage, handlePageChange } = usePagination(data, 10);
  return (
    <div>
      <h1>Ghibli Films</h1>
      {movies.map((movie, idx) => (
          <MovieCard key={`${movie.id}-${idx}`} movie={movie} />
      ))}
         <Pagination
        total={totalPages}
        value={currentPage}
        onChange={handlePageChange}
        size="lg"
      />
    </div>
  );
}

export default AllMovies
