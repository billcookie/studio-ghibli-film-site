import AllMovies from './components/all-movies';
import { Movie } from './types';
// Index file in Next 13
// Things from Mantine do not work well on server side. Therefore, must be inside a seperate component.
async function getMovies() {
  const res = await fetch('https://ghibliapi.vercel.app/films')
  { cache: 'no-store'}
  const data = await res.json()
  return data as Movie[]
}
export default async function Home() {
  const data = await getMovies()
  // console.log('Test Data', data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
       <AllMovies data={data}/>
      </div>
    </main>
  )
}
