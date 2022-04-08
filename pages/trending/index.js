import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const Trending = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="my-6 text-3xl">
          The Movie Database API<span className="text-xs">v3</span>
        </h1>
        <div className=" p-none">
          <Link href="/">
            <a className="inline-flex items-center">
              <FiArrowLeft />
              <p className="pl-4 ">Go Back to Home </p>
            </a>
          </Link>
        </div>
        <div className="container flex flex-col items-center text-center">
          {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}
          {movies.results.map((movie) => {
            const { poster_path, overview, release_date, title, id } = movie
            return (
              <article key={id} className="py-2 my-6">
                <h1 className="py-2 my-3 text-xl font-bold md:text-2xl">
                  {title}
                </h1>
                <p className="my-3 italic font-bold">
                  Release Date: {release_date}
                </p>
                <div className="w-3/4 m-auto">
                  <img
                    src={`${imageBaseUrl}${poster_path}`}
                    alt={`${title} poster`}
                    className="mx-auto rounded-md text-align"
                  />
                </div>
                <div className="mx-auto mt-8 mb-4 lg:w-1/2">
                  <p className="font-sans text-lg font-semibold text-justify">
                    "{overview}"
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Trending

export async function getServerSideProps(context) {
  const movies = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  ).then((data) => data.json())
  // or I can do it like the following:

  // const movies = await data.json()
  // console.log(movies)

  return {
    props: {
      movies,
    },
  }
}
