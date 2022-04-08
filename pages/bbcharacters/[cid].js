const CharacterDetail = ({ specificCharacter }) => {
  const { name, img, nickname } = specificCharacter
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt={`${name} - from Breaking Bad`} />
      <p>{nickname}</p>
    </div>
  )
}

export default CharacterDetail

async function getData() {
  const result = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await result.json()
  return data
}

export async function getStaticProps({ params }) {
  const characterId = params.cid

  const data = await fetch(
    `https://www.breakingbadapi.com/api/characters/${characterId}`
  )
  const character = await data.json()

  return {
    props: {
      specificCharacter: character[0],
    },
  }
}

export async function getStaticPaths() {
  const data = await getData()

  const pathsWithParams = data.map((char) => {
    const characterString = char.char_id.toString()
    return {
      params: { cid: characterString },
    }
  })

  return {
    paths: pathsWithParams,
    fallback: false,
  }
}
