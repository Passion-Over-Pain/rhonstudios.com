"use client"

import {useLanguage} from "@/app/language/LanguageProvider";
import {useEffect, useState} from "react";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

interface GalleryImage {
    url: string;
    title: string;
    category: "screenshot" | "concept-art" | "gameplay" | "characters" | "environment";
}
interface GameGalleryProps {
    images: GalleryImage[];
    gameTitle: string;
}
export function GameGallery({ images, gameTitle }: GameGalleryProps) {
    const { t } = useLanguage();
    const categoryLabels = {
        "screenshot": t.gameGallery.screenshot,
        "concept-art": t.gameGallery.conceptArt,
        "gameplay": t.gameGallery.gameplay,
        "characters": t.gameGallery.characters,
        "environment": t.gameGallery.environment
    }
    const [selectedImages, setSelectedImages] = useState<GalleryImage | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string | "all">("all");
    const categories: Array<"all" | GalleryImage["category"]> = ["all", ...Array.from(new Set(images.map(img => img.category)))];
    const filteredImages = filter === "all"
        ? images
        : images.filter(img => img.category === filter);
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImages(null)
            }
        };
        if (selectedImages) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
        }
    }, [selectedImages, setSelectedImages]);

    if (!images || images.length === 0) return null;


    return (
        <section
            id="gallery"
            className="snap-start relative bg-black text-white pt-32 overflow-hidden py-16 border-y-2 border-white/10"
        >
            <div className="container mx-auto px-8 lg:px-16 max-w-full">
                <div className="mx-auto">
                    <div className="text-center mb-7">
                        <h2
                            className="text-5xl lg:text-6xl mb-6 tracking-wider"
                            style={{ fontFamily: "Rye" }}
                        >
                            {t.gameGallery.title}
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-20 h-[2px] bg-white"/>
                            <p
                                className="text-sm tracking-[0.3em] uppercase"
                                style={{ fontFamily: "Cinzel" }}
                            >
                                {t.gameGallery.subtitle}
                            </p>
                            <div className="w-20 h-[2px] bg-white"/>
                        </div>
                        <div className="flex items-center justify-center gap-6 mt-2">
                            <div className="w-24 h-[2px] bg-white"/>
                            <ImageIcon className="w-6 h-6" />
                            <div className="w-24 h-[2px] bg-white"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`border-2 px-2 py-2 text-sm tracking-[0.2em] uppercase transition-all duration-300 
                                    ${filter === category
                                    ? 'border-white bg-white text-black'
                                    : 'border-white/30 hover:border-white'
                                }
                                `}
                                style={{ fontFamily: "Cinzel" }}
                            >
                                {category === "all" ? t.gameGallery.all : categoryLabels[category]}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setSelectedImages(image)}
                                className="relative aspect-video overflow-hidden border-2 border-white/20 cursor-pointer group bg-black"
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 border border-white/40 bg-black/80 backdrop-blur-sm px-3 py-1 text-center justify-center">
                                    <span
                                        className="text-xs tracking-wider uppercase text-white/80"
                                        style={{ fontFamily: "Cinzel" }}
                                    >
                                        {categoryLabels[image.category]}
                                    </span>
                                </div>
                                <div
                                    className={`
                                        absolute inset-0 bg-black/80 
                                        transition-opacity duration-500
                                        flex flex-col items-center justify-center gap-4
                                        ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                                    `}
                                >
                                    <ZoomIn className="w-12 h-12 text-white/50" />
                                    <h3
                                        className="text-xl tracking-wider text-center px-4"
                                        style={{ fontFamily: "Cinzel" }}
                                    >
                                        {image.title}
                                    </h3>
                                </div>
                                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedImages && (
                <div
                    onClick={() => setSelectedImages(null)}
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-20"
                >
                    <button
                        onClick={() => setSelectedImages(null)}
                        className="absolute top-4 right-4 lg:top-8 lg:right-8 text-white hover:text-white/70 transition-colors z-10 border-2 border-white/40 p-2 hover:border-white"
                    >
                        <X className="w-6 h-6 lg:w-8 lg:h-8"/>
                    </button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-7xl w-full px-4 lg:px-20"
                    >
                        <div className="relative border-2 border-white/30 overflow-hidden bg-black">
                            <img
                                src={selectedImages.url}
                                alt={selectedImages.title}
                                className="w-full h-auto object-contain"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/60"></div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/60"></div>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="inline-block border border-white/40 px-4 py-1 mb-4">
                                <span
                                    className="text-xs tracking-wider uppercase text-white/70"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {categoryLabels[selectedImages.category]}
                                </span>
                            </div>
                            <h3
                                className="text-2xl lg:text-3xl mb-2 tracking-wider"
                                style={{ fontFamily: "Rye" }}
                            >
                                {selectedImages.title}
                            </h3>
                            <p
                                className="text-sm tracking-wider text-white/50"
                                style={{ fontFamily: "Cinzel" }}
                            >
                                {gameTitle}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}