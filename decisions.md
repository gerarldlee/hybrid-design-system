# Architecture Decision Records (ADR)

Record critical structural decisions here to prevent style regression or conflicting code paradigms during future agent context updates.

## ADR 01: Shadow Layer Combination Architecture
* **Status:** Approved
* **Context:** Pure Neo-brutalism relies on flat black drop shadows. Pure Skeuomorphism relies on intricate blur distributions. Combining them naively results in visual blur mud.
* **Decision:** We merge them by stacking multiple layers inside a single custom Tailwind theme utility variable. The inner highlight (skeuomorphic bevel) is executed via a high-alpha white `inset` shadow, while the outer offset (brutalist frame) is executed as a sharp, unblurred pure black vector translation.
* **Example:** `shadow-hybrid-md: inset 0 1.5px 0 0 rgba(255,255,255,0.5), 5px 5px 0px 0px #000000;`

## ADR 02: Animation Engine Dependency Standard
* **Status:** Approved
* **Context:** Standard Tailwind transitions lack dynamic layout projection capabilities when complex components expand or animate structural state switches.
* **Decision:** We standardize on `motion.dev` (modern Framer Motion) as our definitive animation primitive. Standard CSS transitions (`transition-all`) should only be used for simple background color interpolations.