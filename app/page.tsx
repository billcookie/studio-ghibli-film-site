import AllMovies from './components/all-movies';
import { Movie } from './types';
// Index file in Next 13
async function getMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_GHILIBI_API

  if (!apiUrl) {
    console.error('API URL is not defined');
    return [];
  }
  const res = await fetch(apiUrl, { cache: 'no-store' })
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
