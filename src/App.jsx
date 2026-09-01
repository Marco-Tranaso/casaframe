import React, { useState } from "react";
import { Menu, X, Play, ArrowRight, Gift } from "lucide-react";

/**
 * CasaFrame — Landing Page
 * -------------------------------------------------
 * Sostituzioni rapide (cerca i commenti "// SOSTITUISCI"):
 * - WHATSAPP_NUMBER: numero reale in formato internazionale senza +
 * - VIDEO_SRC_*: URL o path dei video reali (mp4, verticali 9:16)
 * - LOGO: testo o sostituiscilo con <img>
 */

const WHATSAPP_NUMBER = "+393383983349";

const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const MSG_GENERIC =
  "Ciao vorrei informazioni sui video immobiliari.";
const MSG_1 =
  "Ciao vorrei creare un video per un mio immobile. Vorrei informazioni sul video singolo da €49.";
const MSG_3 =
  "Ciao sono interessato al pacchetto da 3 video. Vorrei maggiori informazioni.";
const MSG_5 =
  "Ciao sono interessato al pacchetto da 5 video.";
const MSG_DEMO =
  "Ciao! Vorrei richiedere una demo gratuita per il mio immobile. Vi mando le foto qui.";

// ---------- Design tokens (via Tailwind arbitrary values) ----------
// bg:      #F6F4F0 (avorio)
// ink:     #1B1A17 (quasi nero, caldo)
// stone:   #8C867B (grigio caldo neutro)
// line:    #E4E0D8 (bordi chiarissimi)
// accent:  #A9852F (bronzo/ottone — materiale, non "startup")

function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={`relative aspect-[9/16] w-full max-w-[300px] rounded-[28px] border border-[#2a2822] bg-[#100f0d] p-2 shadow-[0_40px_80px_-30px_rgba(20,18,14,0.55)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#1B1A17]">
        {children}
      </div>
    </div>
  );
}

function VideoPlaceholder({ label, sub }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        {/* SOSTITUISCI: percorso video reale */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Testo sopra il video */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
        <p className="font-serif text-[15px] leading-snug text-white">
          {label}
        </p>

        {sub && (
          <p className="mt-1 text-[16px] tracking-wide text-white/70">
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#showcase", label: "Esempi" },
    { href: "#come-funziona", label: "Come funziona" },
    { href: "#demo", label: "Demo gratuita" },
    { href: "#prezzi", label: "Prezzi" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E0D8] bg-[#F6F4F0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
<a href="#top" className="flex items-center gap-2">
  <img
    src="/images/logo-casaframe.jpg"
    alt=""
    className="h-12 w-12 object-contain"
  />

  <span className="font-serif text-[20px] tracking-tight text-[#1B1A17]">
    CasaFrame
  </span>
</a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-[#4A473F] transition-colors hover:text-[#1B1A17]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(MSG_GENERIC)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1B1A17] px-5 py-2.5 text-[14px] text-[#F6F4F0] transition-colors hover:bg-[#2E2B24]"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-[#1B1A17]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E4E0D8] bg-[#F6F4F0] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-[#4A473F]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(MSG_GENERIC)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-[#1B1A17] px-5 py-3 text-center text-[15px] text-[#F6F4F0]"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:items-center md:gap-x-10 md:gap-y-6">
        {/* Headline — sempre prima, anche su mobile */}
        <div className="order-1 md:col-start-1 md:row-start-1">
          <h1 className="font-serif text-[40px] leading-[1.08] text-[#1B1A17] sm:text-[54px]">
            Le tue foto.
            <br />
            Un video che valorizza
            <br />
            la tua casa.
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#4A473F]">
            Trasformiamo le fotografie dei tuoi immobili in video verticali
            professionali, pronti per Instagram, TikTok e Facebook.
          </p>
        </div>

        {/* Video — su mobile subito dopo la headline; su desktop occupa entrambe le righe a destra */}
        <div className="order-2 flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 md:justify-end">
          <PhoneFrame className="md:-rotate-1">
            <VideoPlaceholder label="Attico — Torino" sub="Video verticale 9:16" />
          </PhoneFrame>
        </div>

        {/* Prezzo + CTA — su mobile dopo il video */}
        <div className="order-3 md:col-start-1 md:row-start-2">
          <p className="font-serif text-[20px] text-[#1B1A17]">Da €49 per immobile</p>

          <div className="mt-6 flex flex-col items-start gap-3">
            <a
              href={waLink(MSG_GENERIC)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B1A17] px-7 py-4 text-[15px] text-[#F6F4F0] transition-colors hover:bg-[#2E2B24]"
            >
              Scrivici su WhatsApp
              <ArrowRight size={16} />
            </a>
            <p className="text-[13px] text-[#8C867B]">
              Ti bastano le foto dell'immobile. Al resto pensiamo noi.
            </p>
            <a
              href="#demo"
              className="text-[13px] text-[#B08D57] underline underline-offset-4 hover:text-[#1B1A17]"
            >
              Non sei sicuro? Richiedi una demo gratuita →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const photos = [
    "/images/casa1.jpg",
    "/images/casa2.jpg",
    "/images/casa3.jpg",
    "/images/casa4.jpg",
    "/images/casa5.jpg",
    "/images/casa6.jpg",
  ];

  return (
    <section className="border-t border-[#E4E0D8] bg-[#FBFAF7]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-lg">
          <h2 className="font-serif text-[32px] leading-tight text-[#1B1A17] sm:text-[38px]">
            Hai già le foto. Noi creiamo il video.
          </h2>

          <p className="mt-4 text-[16px] leading-relaxed text-[#4A473F]">
            Parti dalle foto che usi già per l'annuncio. Il resto lo facciamo noi.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">

          {/* FOTO */}
          <div className="rounded-2xl border border-[#E4E0D8] bg-white p-6">
            <p className="text-[12px] text-[#8C867B]">
              Foto dell'immobile
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Foto immobile ${i + 1}`}
                  className="aspect-square w-full rounded-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* FRECCIA */}
          <div className="flex justify-center text-[#B08D57]">
            <ArrowRight size={24} className="hidden sm:block" />
            <span className="text-[13px] text-[#8C867B] sm:hidden">
              diventa
            </span>
          </div>

          {/* VIDEO */}
          <div className="rounded-2xl border border-[#1B1A17] bg-[#1B1A17] p-6">
            <p className="text-[12px] text-[#B08D57]">
              Video CasaFrame
            </p>

            <div className="mt-4 aspect-[3/2] overflow-hidden rounded-md bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const items = [
    { tag: "Appartamento", label: "Trilocale — zona centro", sub: "Stile moderno e pulito" },
    { tag: "Villa", label: "Villa con giardino", sub: "Racconto cinematografico" },
    { tag: "Immobile di pregio", label: "Attico panoramico", sub: "Montaggio premium" },
  ];
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-serif text-[32px] text-[#1B1A17] sm:text-[38px]">
        Guarda cosa possiamo creare.
      </h2>
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.tag} className="flex flex-col items-center">
            <PhoneFrame className="max-w-[340px]">
              <VideoPlaceholder label={it.label} sub={it.sub} />
            </PhoneFrame>
            <p className="mt-4 text-[14px] text-[#4A473F]">{it.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Mandaci le foto",
      body: "Invia le fotografie dell'immobile direttamente su WhatsApp.",
    },
    {
      n: "02",
      title: "Creiamo il video",
      body: "Trasformiamo le tue foto in un video verticale professionale.",
    },
    {
      n: "03",
      title: "Ricevi il video",
      body: "Ti consegniamo il video pronto per essere pubblicato sui tuoi social.",
    },
  ];
  return (
    <section id="come-funziona" className="border-t border-[#E4E0D8] bg-[#FBFAF7]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-serif text-[32px] text-[#1B1A17] sm:text-[38px]">
          Semplice. Come dovrebbe essere.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-l border-[#DDD8CC] pl-5">
              <p className="text-[13px] text-[#B08D57]">{s.n}</p>
              <h3 className="mt-2 font-serif text-[20px] text-[#1B1A17]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A473F]">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-[15px] text-[#8C867B]">
          Nessun software da imparare. Nessun montaggio da fare.
        </p>
      </div>
    </section>
  );
}

function FreeDemo() {
  const points = [
    "Mandaci 3–5 foto del tuo immobile",
    "Creiamo un video di prova, gratis",
    "Nessun impegno, nessuna carta di credito",
  ];
  return (
    <section id="demo" className="border-t border-[#E4E0D8] bg-[#1B1A17]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B08D57]/40 bg-[#B08D57]/10 px-3 py-1 text-[12px] text-[#B08D57]">
              <Gift size={14} />
              Demo gratuita
            </span>

            <h2 className="mt-5 font-serif text-[32px] leading-tight text-[#F6F4F0] sm:text-[38px]">
              Non convinto? Provalo prima di pagare.
            </h2>

            <p className="mt-4 text-[16px] leading-relaxed text-[#D8D3C8]">
              Mandaci le foto di un tuo immobile e ti creiamo una demo
              video gratuita, senza impegno. Se ti piace il risultato,
              procediamo con il video completo.
            </p>

            <ul className="mt-6 space-y-2.5 text-[14px] text-[#D8D3C8]">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08D57]" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={waLink(MSG_DEMO)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F6F4F0] px-7 py-4 text-[15px] text-[#1B1A17] transition-colors hover:bg-white"
            >
              Richiedi la tua demo gratuita
              <ArrowRight size={16} />
            </a>

            <p className="mt-3 text-[13px] text-[#8C867B]">
              Disponibile per un numero limitato di richieste al mese.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <PhoneFrame className="max-w-[260px]">
              <VideoPlaceholder label="Demo — 15 secondi" sub="Esempio gratuito" />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ title, price, features, cta, message, highlighted }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        highlighted
          ? "border-[#1B1A17] bg-[#1B1A17] text-[#F6F4F0] md:-translate-y-3 md:shadow-[0_30px_60px_-25px_rgba(20,18,14,0.4)]"
          : "border-[#E4E0D8] bg-white text-[#1B1A17]"
      }`}
    >
      {highlighted && (
        <span className="mb-4 inline-block w-fit rounded-full bg-[#B08D57] px-3 py-1 text-[11px] text-[#1B1A17]">
          Più scelto
        </span>
      )}
      <h3 className="font-serif text-[20px]">{title}</h3>
      <p className={`mt-2 text-[34px] ${highlighted ? "text-[#F6F4F0]" : "text-[#1B1A17]"}`}>
        {price}
      </p>
      <ul className={`mt-6 flex-1 space-y-2.5 text-[14px] ${highlighted ? "text-[#D8D3C8]" : "text-[#4A473F]"}`}>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 rounded-full px-5 py-3.5 text-center text-[14px] transition-colors ${
          highlighted
            ? "bg-[#F6F4F0] text-[#1B1A17] hover:bg-white"
            : "bg-[#1B1A17] text-[#F6F4F0] hover:bg-[#2E2B24]"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function Pricing() {
  const base = [
    "Animazione foto",
    "Transizioni",
    "Musica",
    "Testi",
    "Logo",
  ];
  return (
    <section id="prezzi" className="border-t border-[#E4E0D8] bg-[#FBFAF7]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-serif text-[32px] text-[#1B1A17] sm:text-[38px]">
          Scegli quanti immobili vuoi trasformare in video.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PriceCard
            title="1 video"
            price="€49"
            features={["1 video verticale", ...base, "1 revisione"]}
            cta="Ordina su WhatsApp"
            message={MSG_1}
          />
          <PriceCard
            title="3 video"
            price="€149"
            features={["3 video immobiliari", ...base, "1 revisione per video"]}
            cta="Ordina su WhatsApp"
            message={MSG_3}
            highlighted
          />
          <PriceCard
            title="5 video"
            price="€229"
            features={["5 video immobiliari", ...base, "1 revisione per video"]}
            cta="Ordina su WhatsApp"
            message={MSG_5}
          />
        </div>

        <p className="mt-8 text-center text-[13px] text-[#8C867B]">
          Nessun abbonamento. Acquisti solo i video che ti servono.
        </p>
        <p className="mt-2 text-center text-[13px] text-[#8C867B]">
          Non hai mai provato CasaFrame?{" "}
          <a
            href="#demo"
            className="text-[#B08D57] underline underline-offset-4 hover:text-[#1B1A17]"
          >
            Richiedi prima una demo gratuita
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
      <h2 className="font-serif text-[34px] leading-tight text-[#1B1A17] sm:text-[42px]">
        Hai già le foto del prossimo immobile?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[16px] text-[#4A473F]">
        Mandacele su WhatsApp. Pensiamo noi a trasformarle in un video.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3">
        <a
          href={waLink(MSG_GENERIC)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1B1A17] px-8 py-4 text-[15px] text-[#F6F4F0] transition-colors hover:bg-[#2E2B24]"
        >
          Crea il tuo video
          <ArrowRight size={16} />
        </a>
        <a
          href="#demo"
          className="text-[13px] text-[#B08D57] underline underline-offset-4 hover:text-[#1B1A17]"
        >
          oppure richiedi una demo gratuita
        </a>
      </div>
      <p className="mt-4 text-[13px] text-[#8C867B]">Da €49 per immobile.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E4E0D8] bg-[#FBFAF7]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="font-serif text-[18px] text-[#1B1A17]">CasaFrame</p>
            <p className="mt-2 text-[14px] text-[#8C867B]">
              Video immobiliari per agenzie e professionisti del real estate.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-[#4A473F]">
            <a href="#showcase" className="hover:text-[#1B1A17]">Esempi</a>
            <a href="#come-funziona" className="hover:text-[#1B1A17]">Come funziona</a>
            <a href="#demo" className="hover:text-[#1B1A17]">Demo gratuita</a>
            <a href="#prezzi" className="hover:text-[#1B1A17]">Prezzi</a>
            <a href={waLink(MSG_GENERIC)} target="_blank" rel="noopener noreferrer" className="hover:text-[#1B1A17]">
              WhatsApp
            </a>
            <a href="#" className="hover:text-[#1B1A17]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1B1A17]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyWhatsApp() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <a
        href={waLink(MSG_GENERIC)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-[#1B1A17] py-3.5 text-[14px] text-[#F6F4F0] shadow-[0_15px_35px_-10px_rgba(20,18,14,0.5)]"
      >
        Scrivi su WhatsApp
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F4F0] font-sans text-[#1B1A17] pb-20 md:pb-0" style={{ fontFamily: "'Public Sans', ui-sans-serif, system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Public+Sans:wght@400;500&display=swap');
        h1, h2, h3, .font-serif { font-family: 'Fraunces', serif; }
      `}</style>
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Showcase />
      <HowItWorks />
      <FreeDemo />
      <Pricing />
      <FinalCTA />
      <Footer />
      <MobileStickyWhatsApp />
    </div>
  );
}