'use client'
import { Pagination } from "@mantine/core"
import { usePagination } from "../hooks/usePagination"
import { Movie } from "../types"
import MovieCard from "./cards/movie-card"
import { useEffect, useState } from "react"
import TextWithImageBlock from "./text-with-image-block"
import { initializeAOS } from "../aos"


interface AllMoviesProps {
  data: Movie[]
}

const AllMovies: React.FC<AllMoviesProps> = ({
  data,
}) => {
  const {
    movies,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
  } = usePagination(data, 10)

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    handleSearch(e.target.value)
  }
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    initializeAOS()
  }, [])
  return (
    <>
      <TextWithImageBlock searchQuery={searchQuery} handleSearchInput={handleSearchInput}/>
      <div className="grid grid-cols-1 gap-0 p-4 lg:p-32 md:grid-cols-2 md:p-16 sm:grid-cols-2 sm:gap-16">
        {filteredMovies.map((movie, idx) => (
          <div key={`${movie.id}-${idx}`} className="movie-card">
             <MovieCard movie={movie} />
          </div>

        ))}
      </div>
      <div className="pagination">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          size="lg"
          className="mb-4 hover:text-amber-700 transition-all ease duration-300"
        />
      </div>
    </>
  )
}

export default AllMovies
