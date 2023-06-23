'use client'
import { Image } from "@mantine/core";
import { Movie } from "../types";
import Hero from "./hero";

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
      <Hero title={title} original_title={original_title} image={image} />
      <div>
        <section className="mb-32">
          <div
            className="blockbg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <Image src={image} alt="Trendy Pants and Shoes"
                  className="w-full" />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-4 text-2xl font-bold">
                    Director: {director}
                  </h2>
                  <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                    {description}
                  </p>

                  <ul>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">Featured Characters:</p>
                    {people.map((person, idx) => {
                      return (
                        <li className="mb-6 text-neutral-500 dark:text-neutral-300" key={person.id}>{person.name}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-black">
      </div>
    </div>
  );
}

export default MovieContent
