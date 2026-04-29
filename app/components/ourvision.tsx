import {useLanguage} from "@/app/language/LanguageProvider";

type Box = {
    id: number,
    num: string,
    text: string,
};
export function OurVision() {
    const { t } = useLanguage();
    const boxes: Box[] = Array.isArray(t.ourvision?.boxes) ? t.ourvision.boxes : [];
    return (
        <section
            id="outvision"
            className="snap-center scroll-mt-[170px] relative bg-black text-white pb-32 overflow-hidden"
            style={{
                minHeight: '100vh',
            }}
        >
            <div className="container mx-auto px-8 lg:px-16">
                <div className="max-w-3xl mx-auto">
                    <div className="border-t-2 border-white/20 pt-20"/>
                    <div className="text-center mb-16">
                        <div className="inline-block border-2 border-white px-10 py-3 mb-8">
                            <p
                                className="text-xs tracking-[0.3em] uppercase"
                                style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                            >
                                {t.ourvision.top_title}
                                </p>
                        </div>
                        <h3
                            className="text-5xl lg:text-5xl mb-6 tracking-wider"
                            style={{ fontFamily: "Rye" }}
                        >
                            {t.ourvision.title}
                        </h3>
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="w-24 h-[2px] bg-white"></div>
                            <p
                                className="text-sm tracking-[0.3em] uppercase"
                                style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                            >
                                {t.ourvision.subtitle}
                            </p>
                            <div className="w-24 h-[2px] bg-white"></div>
                        </div>
                        <p
                            className="text-lg max-w-3xl mx-auto text-white/70 leading-relaxed tracking-wide"
                            style={{ fontFamily: "Cinzel"}}
                        >
                            {t.ourvision.description.p1}
                            <br/>
                            {t.ourvision.description.p2} <strong>{t.ourvision.description.p3}</strong>
                        </p>
                    </div>
                </div>
                <div className="max-2-4xl mx-auto border-2 border-white p-12 text-center">
                    <h3
                        className="text-3xl mb-6 tracking-wide"
                        style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                    >
                        {t.ourvision.commitment}
                    </h3>
                    <p
                        className="text-lg leading-relaxed tracking-wide text-white/80 mb-6"
                        style={{ fontFamily: "Cinzel" }}
                    >
                        {t.ourvision.com_description}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        {boxes.map((box) => (
                            <div key={box.id} className="border-l-2 border-white/30 pl-6 text-left">
                                <div className="text-4xl mb-2 tracking-wide" style={{ fontFamily: "Rye" }}>
                                    {box.num}
                                </div>
                                <p className="text-sm tracking-wider text-white/60" style={{ fontFamily: "Cinzel" }}>
                                    {box.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}