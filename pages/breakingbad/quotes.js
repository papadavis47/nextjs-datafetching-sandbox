import { useState, useEffect } from 'react'

const BbQuotes = () => {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch('https://www.breakingbadapi.com/api/quotes?series=breaking+bad')
      .then((response) => response.json())
      .then((data) => setQuotes(data))

    setIsLoading(false)
  }, [])

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  if (quotes.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1>useEffect</h1>
        <h2>Standard REACT approach - Client Side</h2>
        <div className="container">
          <ul>
            {quotes.map((quote) => (
              <li key={quote.quote_id}>
                <p>{quote.quote}</p>
                <p>{quote.author}</p>
                <p>{quote.series}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default BbQuotes
