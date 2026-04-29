"use client";

import { useParams, useRouter } from "next/navigation";
import { getGameById } from "@/app/games/gamesData";
import {
    ArrowLeft,
    CheckCircle2, Circle,
    Clock,
    ExternalLink,
    FileText,
    Github, Image as ImageIcon,
    Play,
    TrendingUp
} from "lucide-react";
import {useLanguage} from "@/app/language/LanguageProvider";
import {GameGallery} from "@/app/games/GameGallery";
import { motion } from "framer-motion";

export default function GameDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;
    const game = getGameById(id);
    const { t } = useLanguage();
    const renderStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle2 className="w-5 h-5 text-green-400"/>;
            case "in-progress":
                return <Clock className="w-5 h-5 text-yellow-400"/>;
            case "planned":
                return <Circle className="w-5 h-5 text-white/30"/>;
            default:
                return <Circle className="w-5 h-5 text-white"/>;
        }
    }

    if (!game) {
        return (
            <section
                id="gameError"
                className="snap-center scroll-mt-[160px] relative h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
                <div className="relative z-10 containter mx-auto px-8 lg:px-16 text-center">
                    <h1 className="text-4xl mb-8" style={{ fontFamily: "Rye" }}>
                        {t.gamePage.notfound.game}
                    </h1>
                    <button
                        onClick={() => router.push(`/#games`)}
                        className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
                        style={{ fontFamily: "Cinzel" }}
                    >
                        <ArrowLeft size={20} />
                        {t.gamePage.notfound.button}
                    </button>
                </div>
            </section>
        );
    }
    const gameT = t.game_list[game.id];
    return (
        <div className="bg-black text-white min-h-screen">
            <section 
                id="home_game"
                className="snap-center scroll-mt-[160px] relative h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-start pt-12"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${game.heroImage})`,
                        filter: "grayscale(100%) brightness(0.3)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
                <div className="relative z-10 containter mx-auto px-8 lg:px-16 text-center">
                    <div className="mb-10">
                        <div className="inline-block border-1 border-white px-8 py-3 mt-[250px]">
                            <p
                                className="text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "Cinzel", fontSize: 10 }}
                            >
                                {gameT.genre}
                            </p>
                        </div>
                    </div>
                    <h1
                        className="text-7xl lg:text-9xl mb-6 tracking-wider"
                        style={{ fontFamily: game.font }}
                    >
                        {game.title}
                    </h1>
                    <p
                        className="text-2xl lg:text-3xl text-white/80 mb-8 tracking-wide"
                        style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                    >
                        {gameT.subtitle}
                    </p>
                    <div className="flex items-center justify-center gap-6 mb-12">
                        <div className="w-24 h-[2px] bg-white"></div>
                        <div 
                            className="text-xl, tracking-[0.2em] uppercase"
                            style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                        
                        >
                            {gameT.status} • {gameT.year}
                        </div>
                        <div className="w-24 h-[2px] bg-white"></div>
                    </div>
                    <p
                        className="text-xl leading-relaxed max-w-3xl mx-auto mb-12 text-white/90"
                        style={{ fontFamily: "Cinzel" }}
                    >
                        {gameT.pitch}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {game.links.steam && (
                            <a
                                href={game.links.steam}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white px-8 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-300 transition-all"
                            >
                                <ExternalLink className="w-4 h-4"/>
                                <span
                                    className="tracking-wider text-sm"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    Steam
                                </span>
                            </a>
                        )}
                        {game.links.demo && (
                            <a
                                href={game.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white px-8 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                            >
                                <Play className="w-4 h-4" />
                                <span
                                    className="tracking-wider text-sm"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    Demo
                                </span>
                            </a>
                        )}
                        {game.links.github && (
                            <a
                                href={game.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white px-8 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                            >
                                <Github className="w-4 h-4" />
                                <span
                                    className="tracking-wider text-sm"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    GitHub
                                </span>
                            </a>
                        )}
                        {game.links.pressKit && (
                            <a
                                href={game.links.pressKit}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white px-8 py-3 flex items-center gap-3 hover:bg-white hover:text-black transition-all"
                            >
                                <FileText className="w-4 h-4" />
                                <span
                                    className="tracking-wider text-sm"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    Press Kit
                                </span>
                            </a>
                        )}
                    </div>
                </div>
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white"></div>
            </section>
    
            <section
                id="vision"
                className="snap-start scroll-mt-[100px] relative bg-black text-white pt-32 overflow-hidden py-16 border-y-2 border-white/10"
            >
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <h2
                                className="text-5xl lg:text-6xl mb-6 tracking-wider"
                                style={{ fontFamily: "Rye" }}
                            >
                                {t.gamePage.mechanics.title}
                            </h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-20 h-[2px] bg-white"/>
                                <p
                                    className="text-sm tracking-[0.3em] uppercase"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.mechanics.subtitle}
                                </p>
                                <div className="w-20 h-[2px] bg-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-white/30">
                        <div className="p-12 lg:p-16 snap-center">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-[2px] bg-white"/>
                                <h3
                                    className="tet-3xl lg:text-4xl tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.mechanics.mechanics.title}
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {gameT.mechanics.map((mechanic, i) => (
                                    <div 
                                        key={i}
                                        className="border-2 border-white/20 p-8 hover:border-white/40 transition-all duration-300 relative group"
                                    >
                                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
                                        <h4
                                            className="text-lg mb-2 tracking-wide text-white/80"
                                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                        >
                                            {mechanic.title}
                                        </h4>
                                        <p
                                            className="text-white/70 leading-relaxed"
                                            style={{ fontFamily: "Cinzel" }}
                                        >
                                            {mechanic.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[2px] bg-white/30" />
                        <div className="p-12 lg:p-16 snap-center">
                            <div className="flex items-center gap-4 mb-12 justify-end">
                                <h3
                                    className="text-3xl lg:text-4xl tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.mechanics.market.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-white"/>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {gameT.market.map((market, i) => (
                                    <div
                                        key={i}
                                        className="border-2 border-white/20 p-8 hover:border-white/40 transition-all duration-300 relative group"
                                    >
                                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
                                        <h4
                                            className="text-lg mb-2 tracking-wide text-white/80"
                                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                        >
                                            {market.title}
                                        </h4>
                                        <p
                                            className="text-white/70 leading-relaxed"
                                            style={{ fontFamily: "Cinzel" }}
                                        >
                                            {market.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[2px] bg-white/30" />
                        <div className="p-12 lg:p-16 snap-center">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-[2px] bg-white"/>
                                <h3
                                    className="tet-3xl lg:text-4xl tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.mechanics.technics.title}
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {gameT.technic.map((technic, i) => (
                                    <div
                                        key={i}
                                        className="border-2 border-white/20 p-6 hover:border-white/40 transition-all duration-300 relative group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-white mt-2 flex-shrink-0" />
                                            <div>
                                                <h4
                                                    className="text-lg mb-2 tracking-wide text-white/80"
                                                    style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                                >
                                                    {technic.title}
                                                </h4>
                                                <p
                                                    className="text-white/70"
                                                    style={{ fontFamily: "Cinzel" }}
                                                >
                                                    {technic.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="roadmap"
                className="snap-start scroll-mt-[100px] relative bg-black text-white pt-32 overflow-hidden py-16 border-y-2 border-white/10"
            >
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <h2
                                className="text-5xl lg:text-6xl mb-6 tracking-wider"
                                style={{ fontFamily: "Rye" }}
                            >
                                {t.gamePage.roadmap.title}
                            </h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-20 h-[2px] bg-white"/>
                                <p
                                    className="text-sm tracking-[0.3em] uppercase"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.roadmap.subtitle}
                                </p>
                                <div className="w-20 h-[2px] bg-white"/>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-white/30">
                        <div className="p-12 lg:p-16 snap-center">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-[2px] bg-white"/>
                                <h3
                                    className="tet-3xl lg:text-4xl tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.roadmap.vision.title}
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="border-2 border-white/20 p-8 hover:border-white/40 transition-all duration-300 relative group">
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
                                    <h4
                                        className="text-2xl mb-2 tracking-wide text-white/80"
                                        style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                    >
                                        {t.gamePage.roadmap.vision.title}
                                    </h4>
                                    <p
                                        className="text-white/70 leading-relaxed"
                                        style={{ fontFamily: "Cinzel" }}
                                    >
                                        {t.gamePage.roadmap.vision.title}
                                    </p>
                                </div>
                                <div className="border-2 border-white/20 p-8 hover:border-white/40 transition-all duration-300 relative group">
                                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="w-6 h-6"/>
                                        <h4
                                            className="text-2xl mb-2 tracking-wide text-white/80"
                                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                        >
                                            {t.gamePage.roadmap.vision.progress}
                                        </h4>
                                    </div>
                                    <div className="space-y-7">
                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${game.developmentProgress}%` }}
                                                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-white/70 to-white rounded-full"
                                            />
                                        </div>
                                        <p
                                            className="text-white/70 tracking-wide"
                                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                                        >
                                            {game.developmentProgress}% {t.gamePage.roadmap.vision.completed}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[2px] bg-white/30" />
                        <div className="p-12 lg:p-16 snap-center">
                            <div className="flex items-center gap-4 mb-12 justify-center">
                                <div className="w-12 h-[2px] bg-white"/>
                                <h3
                                    className="text-3xl lg:text-4xl tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.roadmap.roadmap.title}
                                </h3>
                                <div className="w-12 h-[2px] bg-white"/>
                            </div>
                            <div className="space-y-8">
                                {gameT.roadmap.map((phase, i) => (
                                    <div
                                        key={i}
                                        className="border-2 border-white/30 p-8"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            {renderStatusIcon(phase.status)}
                                            <h3
                                                className="text-2xl tracking-wider"
                                                style={{ fontFamily: "Cinzel" }}
                                            >
                                                {phase.phase}
                                            </h3>
                                            <span
                                                className="ml-auto text-sm tracking-wider uppercase px-4 py-1 border border-white/30"
                                                style={{ fontFamily: "Cinzel" }}
                                            >
                                                {phase.status === "completed" && t.gamePage.roadmap.roadmap.completed}
                                                {phase.status === "in-progress" && t.gamePage.roadmap.roadmap.inProgress}
                                                {phase.status === "planned" && t.gamePage.roadmap.roadmap.planned}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {phase.items.map((item, i) => (
                                                <li 
                                                    key={i}
                                                    className="flex items-start gap-3 text-white/70"
                                                >
                                                    <div className="w-1.5 h-1.5 bg-white mt-2 flex-shrink-0"/>
                                                    <span
                                                        className="tracking-wide"
                                                        style={{ fontFamily: "Cinzel" }}
                                                    >
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="investment"
                className="snap-start scroll-mt-[100px] relative bg-black text-white pt-32 overflow-hidden py-16 border-y-2 border-white/10"
            >
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-7">
                            <h2
                                className="text-5xl lg:text-6xl mb-6 tracking-wider"
                                style={{ fontFamily: "Rye" }}
                            >
                                {t.gamePage.investment.title}
                            </h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-20 h-[2px] bg-white"/>
                                <p
                                    className="text-sm tracking-[0.3em] uppercase"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.investment.subtitle}
                                </p>
                                <div className="w-20 h-[2px] bg-white"/>
                            </div>
                            <div className="flex items-center justify-center gap-6 mt-2">
                                <div className="w-24 h-[2px] bg-white"/>
                                <TrendingUp className="w-6 h-6" />
                                <div className="w-24 h-[2px] bg-white"/>
                            </div>
                        </div>
                        <div className="space-y-8 mb-12">
                            <div className="border-2 border-white/30 p-8">
                                <h3
                                    className="text-2xl mb-4 tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.investment.monetization}
                                </h3>
                                <p
                                    className="text-white/70 tracking-wide leading-relaxed"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {gameT.investment.monetization}
                                </p>
                            </div>
                            <div className="border-2 border-white/30 p-8">
                                <h3
                                    className="text-2xl mb-4 tracking-wider"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.investment.roi}
                                </h3>
                                <p
                                    className="text-white/70 tracking-wide leading-relaxed"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {gameT.investment.roi}
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-white p-8 bg-white/5">
                            <h3
                                className="text-2xl mb-6 tracking-wider"
                                style={{ fontFamily: "Cinzel" }}
                            >
                                {t.gamePage.investment.keys}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {gameT.investment.keys.map((key, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"/>
                                        <span
                                            className="text-white/80 tracking-wide"
                                            style={{ fontFamily: "Cinzel" }}
                                        >
                                            {key}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {game.gallery && game.gallery.length > 0 && (
                <GameGallery images={game.gallery}  gameTitle={game.title} />
            )}
            <section
                id="contact"
                className="py-24 border-t-2 border-white/10"
            >
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2
                            className="text-4xl lg:text5xl mb-6 tracking-wider"
                            style={{ fontFamily: "Rye" }}
                        >
                            {t.gamePage.contact.title}
                        </h2>
                        <p
                            className="text-xl text-white/70 mb-12 tracking-wide"
                            style={{ fontFamily: "Cinzel" }}
                        >
                            {t.gamePage.contact.description}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => router.push("/#contact")}
                                className="border-2 border-white px-12 py-4 text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
                                style={{ fontFamily: "Cinzel" }}
                            >
                                {t.gamePage.contact.button}
                            </button>
                            {game.links.pressKit && (
                                <a
                                    href={game.links.pressKit}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white/50 px-12 py-4 text-sm tracking-[0.2em] uppercase hover:border-white transition-all"
                                    style={{ fontFamily: "Cinzel" }}
                                >
                                    {t.gamePage.contact.pressKit}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}