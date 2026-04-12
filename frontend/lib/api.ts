// lib/api.js (or wherever your fetch functions are)

const API_BASE_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "http://localhost:3000";

export async function getHeroData() {
  const res = await fetch(`${API_BASE_URL}/api/hero?limit=1`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch hero data");
  const data = await res.json();
  return data.docs[0];
}

export async function getNoticesPage() {
  const res = await fetch(`${API_BASE_URL}/api/globals/notices-page`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch notices page");
  return res.json();
}
