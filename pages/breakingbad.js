const BreakingBad = ({ data }) => {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-slate-500">
      <h1 className="my-6 text-xl italic md:text-2xl lg:text-3xl">
        Here I am using the Breaking Bad REST API
      </h1>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div>
          <p className="my-6 text-2xl underline">getStaticProps</p>
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
                    <h2 className="mb-4 text-2xl font-bold">{name}</h2>
                    <div className="w-1/2 m-auto">
                      <img
                        src={img}
                        alt={name}
                        className="mx-auto text-align"
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

export default BreakingBad

export async function getStaticProps() {
  const result = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await result.json()

  return {
    props: {
      data,
    },
  }
}
