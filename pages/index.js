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
        <h1 className="text-6xl font-bold">Data Fetching Examples</h1>
        <div className="my-6 flex border-b-8 border-solid border-inherit py-3">
          <p className="pr-4 hover:text-blue-400">
            <Link href="/breakingbad">
              <a>
                <code>getStaticProps</code>
              </a>
            </Link>
          </p>
          <p className="pr-4 hover:text-blue-400">
            <Link href="/trending">
              <a>
                <code>getServerSideProps</code>
              </a>
            </Link>
          </p>
          <p className="hover:text-blue-400">
            <Link href="/giphy">
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
