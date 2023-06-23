'use client'
import AllMovies from './components/all-movies';
// this should prefereably be server side. Look at docs for more info.
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
        <AllMovies />
      </div>
    </main>
  )
}
