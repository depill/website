import rss from "@astrojs/rss";
import { publishedWriting, entryUrl } from "../lib/content";
import { site } from "../site";
export async function GET() {
  return rss({
    title: "depill — Writing",
    description: site.description,
    site: site.url,
    items: (await publishedWriting()).map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: entryUrl(entry),
      categories: entry.data.tags,
    })),
    customData: "<language>en</language>",
  });
}
