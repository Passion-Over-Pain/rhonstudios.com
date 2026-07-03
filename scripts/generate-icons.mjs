import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOGO_PATH = join(__dirname, "../public/logos/RhonStudiosCircleLogo.png");
const OUT_DIR   = join(__dirname, "../public/icons");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const ICONS = [
    { name: "icon-192.png",       size: 192 },
    { name: "icon-512.png",       size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
];

async function generate() {
    console.log("Generando iconos PWA...\n");

    for (const { name, size } of ICONS) {
        const outPath = join(OUT_DIR, name);
        await sharp({
            create: {
                width: size,
                height: size,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 1 },
            },
        })
            .composite([
                {
                    input: await sharp(LOGO_PATH)
                        .resize(Math.round(size * 0.8), Math.round(size * 0.8), {
                            fit: "contain",
                            background: { r: 0, g: 0, b: 0, alpha: 0 },
                        })
                        .toBuffer(),
                    gravity: "center",
                },
            ])
            .png()
            .toFile(outPath);

        console.log(`✓  ${name}  (${size}×${size}px)`);
    }
    console.log(`\nListo. Iconos en: public/icons/`);
}

generate().catch(console.error);
