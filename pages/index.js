import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../src/components/footer'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Data Fetching Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">
          Data Fetching Examples
        </h1>
        <div className="flex flex-col py-3 my-6 border-inherit md:flex-row md:border-b-8 md:border-solid">
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none md:pr-4">
            <Link href="/bbcharacters">
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
          <p className="my-2 border-b-4 border-solid border-inherit hover:text-blue-400 md:border-none">
            <Link href="/giphy">
              <a>
                <code>useEffect</code>
              </a>
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"></div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
