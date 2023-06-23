import { Image } from "@mantine/core"
import Link from "next/link"
import { Movie } from "../../types"


interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
}) => {

  return (
    <div className=''>
        <Link href={`/movies/${movie.id}`}>
          <div>
          <Image src={movie.image} alt={`${movie.title} thumbnail`}/>
          </div>
        </Link>
      <div className=''>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.running_time}</p>
        </div>
    </div>
  )
}

export default MovieCard
