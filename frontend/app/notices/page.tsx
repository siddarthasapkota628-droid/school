import { getNoticesPage } from "@/lib/api"

export default async function NoticesPage() {
  const data = await getNoticesPage()

  const notices = data?.notices || []
  const header = data

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">
          {header?.noticesHeaderTitle}
        </h1>

        <p className="text-gray-600 mt-4">
          {header?.noticesHeaderSubtitle}
        </p>
      </div>

      {/* NOTICES GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {notices.map((notice: any, i: number) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-blue-600">
                {notice.type}
              </span>
              <span className="text-xs text-gray-500">
                {notice.date}
              </span>
            </div>

            <h2 className="text-lg font-bold mb-2">
              {notice.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {notice.content}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">
          {data?.contactSection?.title}
        </h2>

        <p className="text-gray-600 mb-6">
          {data?.contactSection?.description}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={data?.contactSection?.primaryButtonLink}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            {data?.contactSection?.primaryButtonText}
          </a>

          <a
            href={data?.contactSection?.secondaryButtonLink}
            className="border px-5 py-2 rounded-lg"
          >
            {data?.contactSection?.secondaryButtonText}
          </a>
        </div>
      </div>

    </div>
  )
}