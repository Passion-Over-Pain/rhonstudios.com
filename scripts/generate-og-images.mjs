import { createCanvas, loadImage, registerFont } from "canvas";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "../public/og");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const W = 1200;
const H = 630;

const IMAGES = [
    {
        slug: "og-default",
        title: "Rhon Studios",
        subtitle: "Creando mundos que se quedan contigo",
        accentColor: "#ffffff",
        bgColor: "#000000",
    },
    {
        slug: "og-home",
        title: "Rhon Studios",
        subtitle: "Estudio Independiente de Videojuegos",
        accentColor: "#ffffff",
        bgColor: "#000000",
    },
    {
        slug: "og-join",
        title: "Únete al Equipo",
        subtitle: "Colabora con Rhon Studios en Revenue Share",
        accentColor: "#E3B873",
        bgColor: "#000000",
    },
    {
        slug: "og-devblogs",
        title: "Devlogs",
        subtitle: "El diario de Rhon Studios — proceso real, sin filtros",
        accentColor: "#ffffff",
        bgColor: "#0a0a0a",
    },
    {
        slug: "og-afterlight",
        title: "Afterlight",
        subtitle: "Un metroidvania donde la luz y la sombra definen quién eres",
        accentColor: "#E3B873",
        bgColor: "#0A0C12",
    },
    {
        slug: "og-tinycare",
        title: "Tiny Care",
        subtitle: "Tu mascota virtual con consecuencias reales",
        accentColor: "#e9edc9",
        bgColor: "#111011",
    },
    {
        slug: "og-theobserver",
        title: "The Observer",
        subtitle: "Novela visual otome de misterio",
        accentColor: "#93C5FD",
        bgColor: "#0a0f12",
    },
    {
        slug: "og-tonkori",
        title: "Tonkori",
        subtitle: "Un RPG donde no existen respuestas correctas",
        accentColor: "#BF6079",
        bgColor: "#0f0508",
    },
];

function drawOG({ slug, title, subtitle, accentColor, bgColor }) {
    const canvas = createCanvas(W, H);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, H);
    
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    ctx.fillStyle = accentColor;
    ctx.fillRect(60, 80, 4, H - 160);

    const corner = 40;
    const margin = 30;
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 2;
    // top-left
    ctx.beginPath(); ctx.moveTo(margin, margin + corner); ctx.lineTo(margin, margin); ctx.lineTo(margin + corner, margin); ctx.stroke();
    // top-right
    ctx.beginPath(); ctx.moveTo(W - margin - corner, margin); ctx.lineTo(W - margin, margin); ctx.lineTo(W - margin, margin + corner); ctx.stroke();
    // bottom-left
    ctx.beginPath(); ctx.moveTo(margin, H - margin - corner); ctx.lineTo(margin, H - margin); ctx.lineTo(margin + corner, H - margin); ctx.stroke();
    // bottom-right
    ctx.beginPath(); ctx.moveTo(W - margin - corner, H - margin); ctx.lineTo(W - margin, H - margin); ctx.lineTo(W - margin, H - margin - corner); ctx.stroke();

    ctx.fillStyle = accentColor;
    ctx.font = "bold 80px serif";
    ctx.textBaseline = "middle";
    ctx.fillText(title, 100, 240);

    ctx.strokeStyle = `${accentColor}55`;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(100, 300); ctx.lineTo(700, 300); ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "26px sans-serif";
    ctx.fillText(subtitle, 100, 360);

    ctx.fillStyle = "rgba(255,255,255,0.30)";
    ctx.font = "22px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("rhonstudios.com", W - 60, H - 55);

    const buffer = canvas.toBuffer("image/png");
    const outPath = join(OUT_DIR, `${slug}.png`);
    writeFileSync(outPath, buffer);
    console.log(`✓  ${slug}.png`);
}

console.log("Generando imágenes OG...\n");
IMAGES.forEach(drawOG);
console.log(`\nListo. Imágenes en: public/og/`);
