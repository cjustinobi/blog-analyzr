const Hero = () => {
  return (
    <section className="my-24 min-h-36 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      <img
        src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Revolutionary way to blog on the web
        </h1>

        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Start now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
