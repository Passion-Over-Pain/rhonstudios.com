export type GameId = "tonkori" | "afterlight";
export interface GameData {
    id: GameId;
    title: string;
    font: string;
    developmentProgress: number;

    heroImage: string;
    thumbnail: string;

    media: {
        screenshots: string[];
        video?: string;
        maskImage?: string;
        WebkitMaskImage?: string;
    };
    gallery? : Array<{
        url: string;
        title: string;
        category: "screenshot" | "concept-art" | "gameplay" | "characters" | "environment";
    }>;
    links: {
        steam?: string;
        demo?: string;
        github?: string;
        pressKit?: string;
    };
    
}

export const gamesData: GameData[] = [
    {
        id: "tonkori",
        title: "Tonkori",
        font: "Skranji",
        thumbnail: "https://images.unsplash.com/photo-1763198216883-7473e2c7eabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMGFkdmVudHVyZSUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzcxOTQxNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        heroImage: "https://images.unsplash.com/photo-1763198216883-7473e2c7eabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMGFkdmVudHVyZSUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzcxOTQxNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        developmentProgress: 20,
        
        links: {
            steam: "",
            demo: "https://demo.rhonstudios.com/tonkori",
            github: "",
            pressKit: "#"
        },

        media: {
            screenshots: [
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
                "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
                "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800"
            ],
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            maskImage: "/logos/TonkoriLogo1.png",
            WebkitMaskImage: "/logos/TonkoriLogo2.png",
        },
        gallery: [
            { url: "https://picsum.photos/id/1015/1200/800", title: "Mountain Valley Gameplay", category: "gameplay" },
            { url: "https://picsum.photos/id/1011/1200/800", title: "Forest Exploration Screenshot", category: "screenshot" },
            { url: "https://picsum.photos/id/1025/1200/800", title: "Hero Character Portrait", category: "characters" },
            { url: "https://picsum.photos/id/1039/1200/800", title: "Ancient Temple Environment", category: "environment" },
            { url: "https://picsum.photos/id/1043/1200/800", title: "City Concept Art", category: "concept-art" }
        ],
    },
    {
        id: "afterlight",
        title: "Afterlight",
        font: "Cinzel Decorative",
        
        developmentProgress: 0,
        
        thumbnail: "https://images.unsplash.com/photo-1752335824586-420c728c21bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXBvY2FseXB0aWMlMjBzdXJ2aXZhbCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcxOTQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        heroImage: "https://images.unsplash.com/photo-1752335824586-420c728c21bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXBvY2FseXB0aWMlMjBzdXJ2aXZhbCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcxOTQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",

        links: {
            steam: "https://store.steampowered.com/app/afterlight",
            demo: "https://demo.rhonstudios.com/afterlight",
            pressKit: "#"
        },

        media: {
            screenshots: [
                "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800",
                "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800",
                "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=800"
            ]
        },
    }
];

export function getGameById(id: string): GameData | undefined {
    return gamesData.find(game => game.id === id);
}
