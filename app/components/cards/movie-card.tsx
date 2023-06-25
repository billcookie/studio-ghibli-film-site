// 'use client'

import { Image } from "@mantine/core"
import Link from "next/link"
import { Movie } from "../../types"
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// AOS.init()

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
}) => {

  const {
    id,
    title,
    description,
    director,
    running_time,
    release_date
  } = movie
  return (
    <div>
      <div className="m-auto px-4 py-8 max-w-xl" data-aos="fade-down"  data-aos-duration="1200" data-aos-once="true">
        <div className="bg-white shadow-2xl" >
          <Link href={`movies/${id}`}>
            <div className="transition-all ease duration-300">
              <Image className="transform transition-all ease duration-300 hover:scale-95" src={movie.image} alt={`${title} thumbnail`} />
            </div>
            <div className="px-4 py-2 mt-2 bg-white">
              <div>
                <h2 className="font-bold text-2xl text-gray-800">{title}</h2>
                <p className="text-xs text-gray-800">Running Time: {running_time} minutes</p>
                <p className="text-xs text-gray-800">Release Date: {release_date}</p>

              </div>
              <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3 line-clamp-2">
                {description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default MovieCard
