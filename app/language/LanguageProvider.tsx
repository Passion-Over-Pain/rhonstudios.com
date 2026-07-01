"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import en from "./en.json";
import es from "./es.json";
import gamesEn from "./games/en.json"
import gamesEs from "./games/es.json"
import projectsEn from "./join/en.json"
import projectsEs from "./join/es.json"
import ourteamEn from "./ourteam/en.json"
import ourteamEs from "./ourteam/es.json"

type Language = "en" | "es";

const translations = {
    en: {...en, game_list: gamesEn, join: projectsEn, ourteam: ourteamEn},
    es: {...es, game_list: gamesEs, join: projectsEs, ourteam: ourteamEs},
}

type Translations = typeof translations.en;

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    setLanguage: () => {},
    t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es");
    
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);