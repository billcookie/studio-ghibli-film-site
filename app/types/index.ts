

export type Movie = {
  id: string,
  title: string,
  description: string,
  director: string,
  image: string,
  movie_banner: string,
  original_title: string,
  original_title_romanised: string,
  release_date: string,
  running_time: string,
  producer: string,
  people: Person[]
}


export type Person = {
  id: string;
  name: string;
  // Add more properties as needed
}
