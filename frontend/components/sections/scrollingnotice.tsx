import ScrollingNoticeClient from "./ScrollingNoticeClient"
import { getNoticesPage } from "@/lib/api"

export default async function ScrollingNotice() {
  const data = await getNoticesPage()

  return <ScrollingNoticeClient data={data} />
}