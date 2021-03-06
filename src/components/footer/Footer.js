const Footer = () => {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="hover:text-blue-400">
          <a
            href="https://github.com/papadavis47/nextjs-datafetching-sandbox"
            target="_blank"
            rel="noreferrer"
          >
            <span className="px-2 mr-1 bg-yellow-200">
              An Experimental Project{' '}
            </span>
            by John William Davis
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Footer
