import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import Image from 'next/image'

const TheWalkingDead = ({ twd }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>getServerSideProps</h1>
        <h2>with paths for each item</h2>
        <div className=" p-none">
          <Link href="/">
            <a className="inline-flex items-center">
              <FiArrowLeft />
              <p className="pl-4 ">Go Back to Home </p>
            </a>
          </Link>
        </div>
        <div>
          <h1>Cast of The Walking Dead</h1>
          <div className="container">
            {twd.cast.map((member) => {
              const { id, name, character, profile_path } = member
              return (
                <article key={id}>
                  <h1>{character}</h1>
                  <h2>{name}</h2>
                  <Link href={`/thewalkingdead/${id}`}>
                    <a>
                      <Image
                        src={`${imageBaseUrl}${profile_path}`}
                        alt={name}
                        width={500}
                        height={750}
                      />
                    </a>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default TheWalkingDead

// https://api.themoviedb.org/3/tv/1402/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US

export async function getServerSideProps() {
  const twd =
    await fetch(`https://api.themoviedb.org/3/tv/1402/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US
`).then((result) => result.json())
  return {
    props: {
      twd,
    },
  }
}
