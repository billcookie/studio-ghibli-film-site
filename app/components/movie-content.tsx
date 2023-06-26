'use client'
import { Image } from "@mantine/core";
import { Movie } from "../types";
import Hero from "./hero";
import MovieInfo from "./movie-info";

interface MovieProps {
  data: Movie
}

const MovieContent: React.FC<MovieProps> = ({
  data,
}) => {
  const {
    title,
    original_title,
    original_title_romanised,
    description,
    image,
    director,
    producer,
    release_date,
    running_time,
    people,

  } = data

  // console.log('people', people)
  return (
    <div>
      <Hero title={title} original_title={original_title} image={image} hasButton={true} />
      <div>
        <MovieInfo
          image={image}
          director={director}
          producer={producer}
          description={description}
          people={people}
          release_date={release_date}
          running_time={running_time}
          original_title_romanised={original_title_romanised}
        />
      </div>
    </div>
  )
}

export default MovieContent
