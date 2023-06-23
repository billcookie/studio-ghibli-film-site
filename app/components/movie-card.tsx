import { Image } from "@mantine/core"
import { Movie } from "../types"


interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
}) => {

  return (
    <div className=''>
      <div className=''>
        <Image src={movie.image} alt={`${movie.title} thumbnail`}/>
      </div>
      <div className=''>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.running_time}</p>
        </div>
    </div>
  )
}

export default MovieCard
