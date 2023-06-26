'use client'
import { Image } from "@mantine/core"
import { Person } from "../types"
import { BiSolidTimeFive } from 'react-icons/bi'
import { BsFillCalendar2WeekFill, BsFillPersonFill } from 'react-icons/bs'
import { BiSolidCameraMovie } from 'react-icons/bi'

interface MovieInfoProps {
  image: string,
  director: string,
  producer: string,
  description: string,
  people?: Person[],
  release_date: string,
  running_time: string,
  original_title_romanised: string,
}

const MovieInfo: React.FC<MovieInfoProps> = ({
  image,
  director,
  producer,
  description,
  people,
  release_date,
  running_time,
  original_title_romanised,
}) => {
  console.log('people', people)
  return (
    <section className="p-6 sm:p-12">
      <div className=" text-white blockbg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-900">
        <div className="flex flex-wrap items-center">
          <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <Image src={image} alt="Trendy Pants and Shoes"
              className="w-full" />
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="flex items-center gap-2 mb-4 text-2xl font-bold">
                <span><BiSolidCameraMovie /></span>Director: {director}
              </h2>
              <h3 className="flex items-center gap-2 mb-4 text-1xl font-bold">
                <span><BsFillPersonFill /></span>Producer: {producer}
              </h3>
              <p className="mb-6 flex items-center font-bold text-danger-500">
                {description}
              </p>
              {people &&
                <div className="flex flex-col gap-2">
                  <h3 className="pb-2">List of Characters from {original_title_romanised}:</h3>
                  <ul className="flex flex-wrap-reverse gap-2">
                    {people?.map((person, idx) => {
                      return (
                        <li className="mb-6 text-white" key={`${person.id} + ${idx}`}>{person.name},</li>
                      )
                    })}
                  </ul>
                </div>
              }
              <p className="mb-6 text-white flex items-center gap-2">
                <span><BiSolidTimeFive /></span> Running Time: {running_time} minutes
              </p>
              <p className="mb-6 text-white flex items-center gap-2">
                <span><BsFillCalendar2WeekFill /></span>Release Date: {release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieInfo
