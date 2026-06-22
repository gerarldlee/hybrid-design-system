# Visual System Contract: The 6-Layer Hybrid Style

This file dictates the immutable structural and aesthetic rules for all generated components, styles, and layouts. No AI agent or human developer may deviate from these layers.

## The 6-Layer Definition Matrix

| Layer / Style | Controls & UI Responsibility | Frontend Realization (Tailwind / shadcn) |
| :--- | :--- | :--- |
| **1. Minimalism** | Layout restraint, typography scales, pure whitespace distribution, radical simplification. | Strict `p-` and `space-y-` tokens, `tracking-tight`, crisp utilitarian sans-serif fonts, removal of non-functional borders or decorative elements. |
| **2. Bauhaus** | Grid architecture, geometric order, asymmetric balance, form-follows-function layouts, visual rhythm. | Rigid `grid-cols-` grids, primary shapes only (1:1 perfect squares/circles for icons, structural nodes, and badges), heavy baseline alignment. |
| **3. Neo-Brutalism** | Boundaries, high-contrast framing, raw structural honesty, unhinged layout offsets, hard edges. | Solid `border-2` or `border-4` using absolute black (`border-black` / `border-neutral-950`), sharp `rounded-none` 90-degree corners, thick hard drop shadows. |
| **4. Skeuomorphism** | Surface tactile cues, directional lighting simulation, micro-depth, physical interaction affordance. | Subtle linear gradients (`bg-gradient-to-b`), sharp inner bevel highlights via inset drop-shadows, physical downward displacement on click. |
| **5. Glassmorphism** | Material layering, backdrop occlusion, atmospheric depth, localized environment color bleeding. | High-performance `backdrop-blur-md`, semi-transparent background alpha sheets (`bg-white/75` or `bg-black/40`), dynamic text vibrancy modifiers. |
| **6. Minimal Cyberpunk** | Kinetic feedback, state telemetry, predictive glows, automated system pulses, micro-animations. | Native `motion.dev` configurations, hardware-accelerated `transition-all`, custom `@keyframes` border glows, dynamic `data-[state=...]` transitions. |

## Structural Core Implementation Rules
* **No Fluid Rounded Corners:** Every interactive layout component or atomic unit MUST use `rounded-none`.
* **High Contrast Borders:** Do not use faint grays for boundaries. Every structural border is solid `#000000` or `#050505`.
* **Tactile Press Mechanic:** All clickable elements must simulate a physical depression. Use `active:translate-x-[2px] active:translate-y-[2px] active:shadow-hybrid-pressed`.