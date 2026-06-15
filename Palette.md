# Antonio Construction — Design Palette

> Stack: Next.js + Tailwind CSS  
> Style: Dark grid + Liquid Glass UI  
> Studio: Vextrix Studio

---

## Color Tokens

| Token | Name | Hex | Uso |
|---|---|---|---|
| `carbon` | Negro carbón | `#111111` | Background principal |
| `graphite` | Grafito | `#1F1F1F` | Cards, nav, secciones alternas |
| `white` | Blanco puro | `#FFFFFF` | Texto principal sobre oscuro |
| `light-gray` | Gris claro | `#F5F5F5` | Fondo alternativo (modo claro) |
| `mid-gray` | Gris medio | `#D1D5DB` | Bordes, líneas de cuadrícula |
| `accent` | Amarillo construcción | `#F59E0B` | CTAs, highlights, hover states |

---

## Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        carbon:    '#111111',
        graphite:  '#1F1F1F',
        'mid-gray':'#D1D5DB',
        accent:    '#F59E0B',
      },
      backgroundImage: {
        'grid-dark': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cpath d='M28 0H0V28' fill='none' stroke='%23D1D5DB' stroke-width='0.4' stroke-opacity='0.15'/%3E%3C/svg%3E")`,
      },
    },
  },
}
```

---

## Liquid Glass — CSS Variables

```css
/* globals.css */
:root {
  --glass-bg:       rgba(255, 255, 255, 0.04);
  --glass-border:   rgba(255, 255, 255, 0.10);
  --glass-shadow:   0 4px 24px rgba(0, 0, 0, 0.40);
  --glass-blur:     blur(16px);
  --glass-radius:   16px;

  --glass-hover-bg:     rgba(255, 255, 255, 0.08);
  --glass-hover-border: rgba(245, 158, 11, 0.35);  /* accent glow */
}
```

---

## Liquid Glass — Componente Base

```css
/* Usar en cards, nav, modals */
.glass {
  background:    var(--glass-bg);
  border:        1px solid var(--glass-border);
  box-shadow:    var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border-radius: var(--glass-radius);
}

.glass:hover {
  background: var(--glass-hover-bg);
  border-color: var(--glass-hover-border);
  transition: all 0.2s ease;
}
```

---

## Liquid Glass — Tailwind Utility Class

```js
// tailwind.config.js — agregar en plugins
const plugin = require('tailwindcss/plugin')

plugin(({ addComponents }) => {
  addComponents({
    '.glass': {
      background:           'rgba(255,255,255,0.04)',
      border:               '1px solid rgba(255,255,255,0.10)',
      boxShadow:            '0 4px 24px rgba(0,0,0,0.40)',
      backdropFilter:       'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius:         '16px',
    },
    '.glass-accent': {
      borderColor: 'rgba(245,158,11,0.35)',
    },
  })
})
```

---

## Uso en Componentes JSX

```tsx
// Card de servicio — liquid glass sobre fondo grid
<div className="glass p-6 hover:glass-accent transition-all duration-200">
  <h3 className="text-white font-semibold text-lg">General Contracting</h3>
  <p className="text-mid-gray text-sm mt-2">
    Full project management from foundation to finish.
  </p>
</div>

// Navbar glass
<nav className="glass fixed top-0 w-full px-8 py-4 z-50">
  <span className="text-white font-bold tracking-tight">Antonio Construction</span>
</nav>

// Botón accent
<button className="bg-accent text-carbon font-semibold px-6 py-3 rounded-xl
                   hover:brightness-110 transition-all duration-150">
  Get a Free Quote
</button>
```

---

## Background — Grid + Dark

```tsx
// layout.tsx o page.tsx — fondo base
<body className="bg-carbon bg-grid-dark min-h-screen text-white antialiased">
  {children}
</body>
```

---

## Jerarquía Visual

```
#111111  bg-carbon        ← página entera
  └── bg-grid-dark        ← cuadrícula sutil encima
        └── .glass        ← cards, nav, modals flotando
              └── #F59E0B ← accent: CTAs y hovers únicamente
```

---

## Typography (recomendado)

| Rol | Fuente | Weight |
|---|---|---|
| Display / Hero | `Bebas Neue` | 400 |
| Headings | `Inter` | 700 |
| Body | `Inter` | 400 |
| Captions / Labels | `Inter` | 500 — uppercase + tracking |

```tsx
// next/font en layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```

Para Bebas Neue agregar en `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
```

---

*Vextrix Studio — Antonio Construction © 2025*