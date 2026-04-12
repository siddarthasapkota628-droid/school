import { getHeroData } from "@/lib/api"

export async function HeroSection() {
  const hero = await getHeroData()

  return (
    <section id="home" className="relative h-[80vh] w-full">

      {/* Background Image */}
      <img
        src={
          hero?.backgroundImage?.url
            ? `${process.env.NEXT_PUBLIC_PAYLOAD_API_URL}${hero.backgroundImage.url}`
            : "/school1.jpg"
        }
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            {hero?.title}{" "}
            <span className="text-green-400">
              {hero?.highlightText}
            </span>
          </h1>

          <p className="mb-8 text-lg sm:text-xl">
            {hero?.description}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            {hero?.buttons?.map((btn: any, i: number) => (
              <a
                key={i}
                href={btn.link}
                className={
                  btn.variant === "primary"
                    ? "rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                    : "rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-black"
                }
              >
                {btn.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}