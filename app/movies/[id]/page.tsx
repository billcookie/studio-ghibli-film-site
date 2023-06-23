import MovieContent from "@/app/components/movie-content";
import { Movie, Person } from "@/app/types";
import { Image } from "@mantine/core";

async function getMovie(movieId: string): Promise<Movie> {
  const apiUrl = `${process.env.NEXT_PUBLIC_GHILIBI_API}/${movieId}`;

  const res = await fetch(apiUrl, { next: { revalidate: 10 } });
  const movieData = await res.json();

  const peopleData: Person[] = [];

  try {
    for (const url of movieData.people) {
      const response = await fetch(url);
      const personData = await response.json();
      peopleData.push(personData);
    }
  } catch (error) {
    console.error('Cannot fetch people', error);
  }

  return {
    ...movieData,
    people: peopleData,
  } as Movie;
}
export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
      <MovieContent data={movie} />
      </div>

    </div>
  )
}
