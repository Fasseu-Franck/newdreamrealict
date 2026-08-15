---
name: Dream Real Dark
colors:
  surface: '#0f1417'
  surface-dim: '#0f1417'
  surface-bright: '#343a3d'
  surface-container-lowest: '#090f12'
  surface-container-low: '#171c1f'
  surface-container: '#1b2023'
  surface-container-high: '#252b2e'
  surface-container-highest: '#303639'
  on-surface: '#dee3e7'
  on-surface-variant: '#c3c6cd'
  inverse-surface: '#dee3e7'
  inverse-on-surface: '#2c3134'
  outline: '#8d9197'
  outline-variant: '#43474c'
  surface-tint: '#b3c9e3'
  primary: '#b3c9e3'
  on-primary: '#1d3246'
  primary-container: '#13293d'
  on-primary-container: '#7b91a9'
  inverse-primary: '#4b6077'
  secondary: '#78dd6b'
  on-secondary: '#003a03'
  secondary-container: '#02770e'
  on-secondary-container: '#95fc85'
  tertiary: '#61e06c'
  on-tertiary: '#00390d'
  tertiary-container: '#002f09'
  on-tertiary-container: '#17a439'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#b3c9e3'
  on-primary-fixed: '#051d30'
  on-primary-fixed-variant: '#34495e'
  secondary-fixed: '#94fa84'
  secondary-fixed-dim: '#78dd6b'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#005306'
  tertiary-fixed: '#7efd85'
  tertiary-fixed-dim: '#61e06c'
  on-tertiary-fixed: '#002105'
  on-tertiary-fixed-variant: '#005316'
  background: '#0f1417'
  on-background: '#dee3e7'
  surface-variant: '#303639'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  max-width: 1280px
---

## Brand & Style
The design system evolves the brand into a high-performance, technical authority by adopting a sophisticated dark-mode aesthetic. The brand personality remains **authoritative yet accessible**, but shifts its focus toward a premium, "late-night study" environment that reduces eye strain and emphasizes technical mastery.

The design style is **Corporate / Modern** with a **Glassmorphic** edge. It utilizes a deep, nocturnal foundation with translucent overlays and precise lighting to guide the user's focus. The interface feels like a professional developer environment—stable, focused, and high-end—while maintaining the approachable warmth of the educational mission.

## Colors
The palette is anchored by **Nocturnal Navy** (`#13293D`), creating a deep, stable environment for learning.

- **Primary (Navy):** Used for structural backgrounds and primary branding. In this dark theme, the primary color forms the base "Surface-Container" tiers.
- **Secondary (Vibrant Green):** Acts as the high-contrast action color (`#56B94C`). It is used for primary calls-to-action and progress, ensuring "Growth" remains the most visible element against the dark background.
- **Tertiary (Mint Glow):** A brighter, lighter green (`#76F57E`) used for subtle highlights, accents, and success states that require more vibrancy.
- **Neutral (Cool Gray):** The neutral foundation (`#E9EEF2`) is now a light, cool gray, providing crisp contrast for text and boundaries against the nocturnal background.
- **Contrast Strategy:** Text utilizes the neutral light gray for headlines and high-transparency variations for secondary information to ensure AA+ accessibility.

## Typography
This design system pairs **Plus Jakarta Sans** for display and headline roles with **Inter** for utility and body copy. 

In the dark theme, font weights are slightly adjusted visually; headlines remain bold to anchor the hierarchy, while body copy maintains a generous line height (1.6) to prevent "halo" effects on high-contrast screens. Technical data and labels use Inter to maintain a clean, systematic feel.

## Layout & Spacing
A **Fixed-Fluid Hybrid** grid is used to manage content density. 

- **Desktop:** 12-column grid within a 1280px container.
- **Mobile:** Single column with 16px side margins.
- **Rhythm:** An 8px square grid governs all spacing. Vertical rhythm is strictly enforced with `lg` (48px) and `xl` (80px) gaps between major sections to allow the dark interface to "breathe" and prevent visual clutter.

## Elevation & Depth
In this dark-themed design system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Canvas:** The deepest level (`#0A141D`).
- **Surface (Level 1):** Primary Navy (`#13293D`). This is used for the main content cards.
- **Elevated (Level 2):** Utilizing semi-transparent overlays of the neutral gray or lighter navy tones to indicate hover states and secondary containers.
- **Borders:** Instead of deep shadows, 1px borders using `outline-variant` or a low-opacity neutral gray (10-20%) are used to define component boundaries, creating a "schematic" technical look.

## Shapes
The shape language is **Rounded**, maintaining the brand's friendly educational tone within the new professional color palette.

- **Standard (8px):** Applied to buttons, input fields, and small UI widgets.
- **Large (16px):** Applied to course cards and modal containers.
- **Pills:** Used exclusively for status indicators (e.g., "In Progress") and tags to differentiate them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid Vibrant Green (`#56B94C`) with Dark Navy text. This provides maximum visibility for the primary call to action.
- **Secondary:** Outlined with 1.5px border in Primary Navy or the Neutral light gray (at 20% opacity).
- **Ghost:** Transparent background with Tertiary Mint (`#76F57E`) text for secondary navigation.

### Cards
- Surface color (`#13293D`) with a subtle 1px border. Internal padding of 24px. Images should have a slight dark overlay to blend with the UI.

### Inputs & Form Fields
- Background uses a deep nocturnal shade with an 8px radius. On focus, the border glows with the Vibrant or Tertiary green color.

### Progress Indicators
- Track: Dark Navy (`#13293D`).
- Indicator: Vibrant Green (`#56B94C`).
- Uses 8px height with fully rounded caps for a modern, tactile feel.

### Navigation
- Sidebar utilizes a "Glass" effect (backdrop-blur) when overlaying content, with a 4px Green indicator to mark the active menu item.