"use client"

export default function ScrollingNoticeClient({ data }: any) {
  const notices = data?.notices || []

  const activeNotices = notices.filter((n: any) => {
    if (!n.showOnHomepage) return false
    if (n.expiryDate && new Date(n.expiryDate) < new Date()) return false
    return true
  })

  return (
    <div className="w-full bg-yellow-500 text-black overflow-hidden border-b border-yellow-600">
      <div className="whitespace-nowrap flex animate-scroll px-4 py-2 gap-20">
        {activeNotices.map((notice: any, i: number) => (
          <span key={i} className="font-medium pl-6">
            🚨 {notice.title} • {notice.type} • {notice.date}
          </span>
        ))}
      </div>
    </div>
  )
}