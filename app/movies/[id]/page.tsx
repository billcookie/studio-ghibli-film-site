import MovieContent from "@/app/components/movie-content"
import { Movie, Person } from "@/app/types"

export const metadata = {
  title: 'TEST',
  description: 'Ghibliography: Unleash the Magic: Dive into the world of Studio Ghibli',
}

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
    console.error('Cannot fetch people please check console', error);
  }

  return {
    ...movieData,
    people: peopleData,
  } as Movie;
}
export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovie(params.id)

  return (

    <div className="">
      <div>
      <MovieContent data={movie} />
      </div>

    </div>
  )
}
