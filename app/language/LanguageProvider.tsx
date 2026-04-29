"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import en from "./en.json";
import es from "./es.json";

type Language = "en" | "es";

type Translations = typeof en;

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    setLanguage: () => {},
    t: en
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("es");

    const translations = language === "en" ? en : es;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);