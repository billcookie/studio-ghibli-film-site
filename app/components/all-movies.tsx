'use client'
import { Image, Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { useAllMovies } from "../hooks/useAllMovies";
import { Movie } from "../types";
import MovieCard from "./movie-card";


// this interface should be getting type. Look at use client nextjs docs for making data top level
interface AllMoviesProps {

}

const AllMovies: React.FC<AllMoviesProps> = ({
}) => {
  const { movies, totalPages, currentPage, handlePageChange } = useAllMovies(10);

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
