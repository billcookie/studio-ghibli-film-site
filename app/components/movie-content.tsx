'use client'
import { Image } from "@mantine/core";
import { Movie } from "../types";

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
    people

  } = data

  // console.log('people', people)
  return (
    <div>
      <h1>{title}</h1>
      <Image src={image} alt={`${title} - image`} />
      <div>{people.map((person, idx) => {
        return (
          <p className='' key={person.id}>{person.name}</p>
        )
      })}
      </div>
    </div>
  );
}

export default MovieContent
