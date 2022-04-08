import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
const BreakingBadCharacters = ({ data }) => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-slate-500">
      <h1 className="my-6 text-xl italic md:text-2xl lg:text-3xl">
        Breaking Bad REST API
      </h1>
      <div className=" p-none">
        <Link href="/">
          <a className="inline-flex items-center">
            <FiArrowLeft />
            <p className="pl-4 ">Go Back to Home </p>
          </a>
        </Link>
      </div>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div>
          <p className="my-6 text-2xl underline">
            <a
              className="hover:text-white"
              href="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
              target="_blank"
              rel="noreferrer"
            >
              getStaticProps
            </a>
          </p>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <div className="container">
            {data.map((character) => {
              const { char_id, name, img, portrayed } = character
              if (portrayed !== 'Unknown') {
                return (
                  <article
                    key={char_id}
                    className="py-4 my-6 border-b border-slate-300"
                  >
                    <h2 className="mb-4 text-2xl font-bold hover:text-white">
                      <Link href={`/breakingbad/characters/${char_id}`}>
                        <a>{name}</a>
                      </Link>
                    </h2>
                    <div className="w-1/2 m-auto">
                      <img
                        src={img}
                        alt={name}
                        className="mx-auto rounded-sm text-align"
                      />
                    </div>
                    <h3 className="my-4">
                      Played by: &nbsp;{' '}
                      <span className="font-bold">{portrayed}</span>
                    </h3>
                  </article>
                )
              }
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default BreakingBadCharacters

export async function getStaticProps() {
  const result = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await result.json()

  return {
    props: {
      data,
    },
  }
}
