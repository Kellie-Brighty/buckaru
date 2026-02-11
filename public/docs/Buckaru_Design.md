# Design Spec: Buckaru Hyper-Charge

## 1. DESIGN PHILOSOPHY

The site combines the nostalgic charm of Pokémon with the high-stakes energy of GameStop and crypto communities. We use **Glassmorphism**, **High-Contrast Glows**, and **Grainy Textures** to create a premium "Holographic Trading Card" feel.

## 2. COLOR PALETTE

- **Primary (Electric)**: `#F7E500` (AA Contrast on Dark)
- **Secondary (GS Power)**: `#E10600`
- **Diamond Accent**: `#4CC9F0`
- **Dark Background**: `#050505`
- **Glass Surface**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(12px)`
- **Success/HODL**: `#00F5D4`

## 3. TYPOGRAPHY

- **Primary Font**: `Space Grotesk` (Google Font) - Scientific, industrial, and friendly.
- **Hero Title**: 72px / 1.1 LH / 700 Weight.
- **Body Text**: 16px / 1.6 LH / 400 Weight.
- **Labels**: 12px / 600 Weight / All-Caps.

## 4. COMPONENTS

### The Charge Button

- **Default**: Glowing yellow border, glass center.
- **Hover**: Pulsing lightning animation, scale up 1.05x.
- **Active**: Flash of white light, particle burst.

### The Global Meter

- **Background**: Hollow glass tube.
- **Fill**: Liquid lightning effect that glows brighter as it fills.
- **Milestones**: Diamond icons that light up when reached.

## 5. WIREFRAME BREAKDOWN

### Hero Section

- **Background**: Slow-moving parallax starfield with occasional lightning strikes.
- **Center**: High-res animated Buckaru sprite (from provided assets).
- **Foreground**: "BUCKARU" title in a custom blocky font with a red/yellow gradient.
- **CTA**: "SPARK THE DROP" - Big interactive button below Buckaru.

### The Mini-Game (Overlay)

- **UI**: Retro arcade style overlay.
- **Assets**: Falling Diamonds vs Falling "Hands".
- **Music**: Energetic 8-bit synth (visual representation if audio is off).

## 6. TAILWIND EXTENSION

```javascript
{
  theme: {
    extend: {
      colors: {
        electric: '#F7E500',
        gme: '#E10600',
        diamond: '#4CC9F0',
        hodl: '#00F5D4',
        dark: '#050505',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
      }
    }
  }
}
```
