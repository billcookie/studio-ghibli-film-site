import AllMovies from './components/all-movies';
import Hero from './components/hero';
import { Movie } from './types';

async function getMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_GHILIBI_API

  if (!apiUrl) {
    console.error('API URL is not defined')
    return []
  }
  const res = await fetch(apiUrl, { cache: 'no-store' })
  const data = await res.json()
  return data as Movie[]
}


export default async function Home() {
  const data = await getMovies()
  return (
    <main className="min-h-screen">
      <Hero title="Discover Ghibli" subtitle='Unleash the magic!' image="https://assets-prd.ignimgs.com/2022/07/22/best-studio-ghibli-movies-thumbnail-1658448488868.jpg"/>
      <div className='grid'>
       <AllMovies data={data}/>
      </div>
    </main>
  )
}
