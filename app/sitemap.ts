import type { MetadataRoute } from "next";

const SITE_URL = "https://rhonstudios.com";

const STATIC_ROUTES = [
    { path: "/",                   priority: 1.0,  changeFrequency: "weekly"  },
    { path: "/join",               priority: 0.9,  changeFrequency: "weekly"  },
    { path: "/devblogs",           priority: 0.8,  changeFrequency: "weekly"  },
    { path: "/games/afterlight",   priority: 0.9,  changeFrequency: "monthly" },
    { path: "/games/tinycare",     priority: 0.8,  changeFrequency: "monthly" },
    { path: "/games/theobserver",  priority: 0.8,  changeFrequency: "monthly" },
    { path: "/games/tonkori",      priority: 0.7,  changeFrequency: "monthly" },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.flatMap(
        ({path, priority, changeFrequency}) => [
            {
                url: `${SITE_URL}${path}`,
                lastModified: now,
                changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
                priority,
                alternates: {
                    languages: {
                        es: `${SITE_URL}${path}`,
                        en: `${SITE_URL}/en${path}`,
                    },
                },
            },
            {
                url: `${SITE_URL}/en${path}`,
                lastModified: now,
                changeFrequency: changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
                priority: priority * 0.95, // Ligera penalización a la variante
                alternates: {
                    languages: {
                        es: `${SITE_URL}${path}`,
                        en: `${SITE_URL}/en${path}`,
                    },
                },
            },
        ]
    );
    return [...staticEntries];
}