# Component Implementation Roadmap

Track the status of the library buildout here. All components must pass the 6-layer style lint check before execution completion.

## Phase 1: Core Primitives (Atoms)
- [ ] `Theme Engine / global.css` - Establish utility shadows, custom `@keyframes`, and root custom properties.
- [ ] `HybridButton` - High-affordance tactile button with physical click translations and inner highlights.
- [ ] `HybridInput` - Geometric text fields featuring inset shadow states on focus.
- [ ] `StatusNode` - Ambient pulsing badges mimicking live system telemetry signals.

## Phase 2: Structural Modules (Molecules)
- [ ] `GlassCard` - The base structural card utility combining `backdrop-blur-md` with hard brutalist offsets.
- [ ] `TelemetryChart` - Vector graph wrappers embedded with an internal coordinate alignment grid.
- [ ] `MatrixTable` - Bauhaus data grid mapping cells cleanly using raw inline rows.

## Phase 3: Complex Views (Templates)
- [ ] `SystemDashboard` - Complete admin workspace preview interface layout.
- [ ] `NavigationMatrix` - Strict vertical control sidebar with active node indicator points.