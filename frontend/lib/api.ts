async function getHeroData() {
  const res = await fetch("http://localhost:3000/api/hero?limit=1", {
    cache: "no-store",
  })

  const data = await res.json()
  return data.docs[0]
}

export async function getNoticesPage() {
  const res = await fetch("http://localhost:3000/api/globals/notices-page", {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch notices page")

  return res.json()
}
