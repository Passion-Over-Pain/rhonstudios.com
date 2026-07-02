export interface DevBlogPost {
    id: 
        "db-001"
    ;
    slug: string;
    project: 
        "Tonkori" 
        | "Afterlight" 
        | "Rhon Studios" 
        | "The Observer" 
        | "Tiny Care";
    publishedAt: string;
    readingTime: number;
    featured: boolean;
    coverImage?: string;
}

export const devBlogPosts: DevBlogPost[] = [
    {
        id: "db-001",
        project: "Rhon Studios",
        publishedAt: "2026-06-01",
        readingTime: 4,
        featured: true,
        slug: "why-rhon-studios"
    }
];

export function getDevBlogBySlug(slug: string) {
    return devBlogPosts.find(post => post.slug === slug);
}
