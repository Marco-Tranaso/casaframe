# CasaFrame — Landing Page

Landing page premium per CasaFrame, servizio di video immobiliari a partire dalle
fotografie degli immobili. Stack: React + Vite + Tailwind CSS.

## Avvio in locale

```bash
npm install
npm run dev
```

Apri http://localhost:5173 

## Build di produzione

```bash
npm run build
npm run preview
```

I file compilati vengono generati nella cartella `dist/`.

## Cosa sostituire prima di andare online

Tutto è centralizzato in `src/App.jsx`:

1. **Numero WhatsApp** — in cima al file, costante `WHATSAPP_NUMBER`.
   Inserisci il numero reale in formato internazionale, solo cifre
   (es. `393331234567`).

2. **Video reali** — cerca il componente `VideoPlaceholder`. Ogni punto in cui
   viene usato (Hero, Showcase) è un video da sostituire. Rimpiazza il
   placeholder con:

   ```jsx
   <video
     autoPlay
     muted
     loop
     playsInline
     src="/videos/nome-video.mp4"
     className="h-full w-full object-cover"
   />
   ```

   Metti i file video in `public/videos/` così sono raggiungibili da `/videos/...`.

3. **Prezzi** — componente `Pricing`, se cambiano gli importi o i pacchetti.

4. **Logo** — attualmente è testo (`CasaFrame`) in `Navbar` e `Footer`.
   Per usare un'immagine, sostituisci lo `<span>` con `<img src="/logo.svg" .../>`.

5. **Testi SEO** — titolo e meta description sono in `index.html`.

## Struttura del progetto

```
casaframe/
├── index.html          # entry HTML, meta tag SEO/Open Graph
├── src/
│   ├── main.jsx        # bootstrap React
│   ├── App.jsx         # tutta la landing page (componenti inline)
│   └── index.css       # Tailwind + font
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```
