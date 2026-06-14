import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection('insights'))
        .filter((p) => !p.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return rss({
        title: 'Day Zero Solutions Insights',
        description: 'Notes on building operations software for Australian hospitality and aged care.',
        site: context.site,
        items: posts.map((p) => ({
            title: p.data.title,
            description: p.data.description,
            pubDate: p.data.pubDate,
            link: `/insights/${p.id}`,
        })),
    });
}
