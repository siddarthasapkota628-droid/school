import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect immediately to the Payload admin panel
  redirect(process.env.NEXT_PUBLIC_PAYLOAD_ADMIN_URL!)
}