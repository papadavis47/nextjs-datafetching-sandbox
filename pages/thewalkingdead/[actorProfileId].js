import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

const TwdActor = ({ actorInfo }) => {
  const { name, profile_path, biography } = actorInfo
  return (
    <div>
      <h1>{name}</h1>
      <p>{biography}</p>
      <div className=" p-none">
        <Link href="/thewalkingdead">
          <a className="inline-flex items-center">
            <FiArrowLeft />
            <p className="pl-4 ">Go Back to List </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default TwdActor

export async function getServerSideProps(context) {
  const { params } = context
  const actorProfileId = params.actorProfileId.toString()
  const actorInfo = await fetch(
    `https://api.themoviedb.org/3/person/${actorProfileId}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  ).then((result) => result.json())

  return {
    props: {
      actorInfo,
    },
  }
}
