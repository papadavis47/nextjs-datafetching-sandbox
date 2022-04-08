import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../src/components/footer'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Data Fetching Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">
          Data Fetching Examples
        </h1>
        <div className="my-6 flex flex-col border-inherit py-3 md:flex-row md:border-b-8 md:border-solid">
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none md:pr-4">
            <Link href="/breakingbad/characters">
              <a>
                <code>getStaticProps</code>
              </a>
            </Link>
          </p>
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none md:pr-4">
            <Link href="/trending">
              <a>
                <code>getServerSideProps</code>
              </a>
            </Link>
          </p>
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none md:pr-4">
            <Link href="/movies">
              <a>
                <code>getStaticPaths</code>
              </a>
            </Link>
          </p>
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none md:pr-4">
            <Link href="/thewalkingdead">
              <a>
                <code>SSR-With Paths</code>
              </a>
            </Link>
          </p>
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none">
            <Link href="/breakingbad/quotes">
              <a>
                <code>useEffect</code>
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"></div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
