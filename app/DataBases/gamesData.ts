export type GameId = "tonkori" | "afterlight";
export interface GameData {
    id: GameId;
    title: string;
    font: string;
    logo?: string;
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
    
    theme: {
        fontTitle: string;
        fontBody: string;
        fontTitleColor: string;
        fontBodyColor: string;
        bgColor: string;
        accentBorder: string;
        accentText: string;
        accentBg: string;
        accentHoverText: string;
        panelBorderOpacity: string;
        panelBorderHover: string;
        panelDividerBg: string;
        cardBorderOpacity: string;
        cardCornerHoverBorder: string;
        textMuted: string;
        textSubtle: string;
        progressFrom: string;
        progressTo: string;
        progressTrackBg: string;
        colorCompleted: string;
        colorInProgress: string;
        colorToDecide: string;
        heroOverlay: string;
        heroFilter: string;
        investmentHighlightBorder: string;
        investmentHighlightBg: string;
        accentBorderHex: string;
        accentBgHex: string;
        accentHoverTextHex: string;
    }
}

export const gamesData: GameData[] = [
    {
        id: "tonkori",
        title: "Tonkori",
        font: "Skranji",
        logo: "/logos/TonkoriLogo1.png",
        thumbnail: "https://images.unsplash.com/photo-1763198216883-7473e2c7eabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMGFkdmVudHVyZSUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzcxOTQxNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        heroImage: "https://images.unsplash.com/photo-1763198216883-7473e2c7eabb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwZmFudGFzeSUyMGFkdmVudHVyZSUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzcxOTQxNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        developmentProgress: 8,

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
            {url: "https://picsum.photos/id/1015/1200/800", title: "Mountain Valley Gameplay", category: "gameplay"},
            {
                url: "https://picsum.photos/id/1011/1200/800",
                title: "Forest Exploration Screenshot",
                category: "screenshot"
            },
            {url: "https://picsum.photos/id/1025/1200/800", title: "Hero Character Portrait", category: "characters"},
            {
                url: "https://picsum.photos/id/1039/1200/800",
                title: "Ancient Temple Environment",
                category: "environment"
            },
            {url: "https://picsum.photos/id/1043/1200/800", title: "City Concept Art", category: "concept-art"}
        ],
        theme: {
            fontTitle: "Skranji",
            fontBody: "IM Fell English",
            fontTitleColor: "text-[#DCDBD2]",
            fontBodyColor: "text-[#DCDBD2]",
            bgColor: "bg-black",
            accentBorder: "border-[#BF6079]",
            accentText: "text-[#BF6079]",
            accentBg: "bg-[#BF6079]",
            accentHoverText: "text-[#55131A]",
            panelBorderOpacity: "border-[#774343]/50",
            panelBorderHover: "hover:border-[#BF6079]/60",
            panelDividerBg: "bg-[#774343]/50",
            cardBorderOpacity: "border-[#774343]/35",
            cardCornerHoverBorder: "group-hover:border-[#BF6079]/60",
            textMuted: "text-[#DCDBD2]/70",
            textSubtle: "text-[#DCDBD2]/85",
            progressFrom: "from-[#B86060]",
            progressTo: "to-[#BF6079]",
            progressTrackBg: "bg-[#774343]/20",
            colorCompleted: "text-emerald-400",
            colorInProgress: "text-amber-400",
            colorToDecide: "text-rose-400",
            heroOverlay: "from-black/40 via-transparent to-black",
            heroFilter: "sepia(20%) brightness(0.45) saturate(1.1)",
            investmentHighlightBorder: "border-[#BF6079]",
            investmentHighlightBg: "bg-[#BF6079]/5",
            accentBorderHex: "#BF6079",
            accentBgHex: "#BF6079",
            accentHoverTextHex: "#55131A"
        }
    },
    {
        id: "afterlight",
        title: "Afterlight",
        font: "Cinzel Decorative",
        logo: "",
        developmentProgress: 20,
        thumbnail: "https://images.unsplash.com/photo-1752335824586-420c728c21bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXBvY2FseXB0aWMlMjBzdXJ2aXZhbCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcxOTQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        heroImage: "https://images.unsplash.com/photo-1752335824586-420c728c21bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXBvY2FseXB0aWMlMjBzdXJ2aXZhbCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcxOTQxNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",

        links: {
            steam: "https://store.steampowered.com/app/afterlight",
            demo: "https://demo.rhonstudios.com/afterlight",
            pressKit: "#"
        },

        media: {
            screenshots: [
                "",
                "",
                "",
                ""
            ]
        },
        theme: {
            fontTitle: "Cinzel Decorative",
            fontBody: "EB Garamond",
            fontTitleColor: "text-[#F3E9D2]",
            fontBodyColor: "text-[#EDE3CB]",
            bgColor: "bg-[#0A0C12]",
            accentBorder: "border-[#E3B873]",
            accentText: "text-[#E3B873]",
            accentBg: "bg-[#E3B873]",
            accentHoverText: "text-[#0A0C12]",
            panelBorderOpacity: "border-[#E3B873]/20",
            panelBorderHover: "hover:border-[#E3B873]/40",
            panelDividerBg: "bg-[#E3B873]/20",
            cardBorderOpacity: "border-[#E3B873]/15",
            cardCornerHoverBorder: "group-hover:border-[#E3B873]/40",
            textMuted: "text-[#EDE3CB]/70",
            textSubtle: "text-[#EDE3CB]/85",
            progressFrom: "from-[#4A5A8A]",
            progressTo: "to-[#E3B873]",
            progressTrackBg: "bg-[#E3B873]/10",
            colorCompleted: "text-emerald-400",
            colorInProgress: "text-amber-400",
            colorToDecide: "text-rose-400",
            heroOverlay: "from-[#0A0C12]/40 via-transparent to-[#0A0C12]",
            heroFilter: "grayscale(15%) brightness(0.5) saturate(0.9)",
            investmentHighlightBorder: "border-[#E3B873]",
            investmentHighlightBg: "bg-[#E3B873]/5",
            accentBorderHex: "#E3B873",
            accentBgHex: "#E3B873",
            accentHoverTextHex: "#0A0C12",
        },
    }
];

export function getGameById(id: string): GameData | undefined {
    return gamesData.find(game => game.id === id);
}
