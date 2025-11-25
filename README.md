# Car Configurator — Perplex

A small, component-driven car configurator implemented with React + TypeScript and Vite. This project demonstrates a configurable multi-step UI where users pick a model, color and wheels and get a live preview and summary.

**Tech stack**

- **Framework:** React (TypeScript)
- **Bundler / dev server:** Vite
- **Styling:** Tailwind CSS (utility classes)
- **Tooling:** TypeScript, ESLint, and Vite scripts in `package.json`

**Quick Links**

- Source: `src/`
- Components: `src/components/`
- Data: `src/data/`
- Configuration logic (steps): `src/lib/configuration.ts`
- Types: `src/types/`

**Features**

- Multi-step configurator (model → color → wheels → summary)
- Live preview of chosen car and wheels
- Typed data and step definitions so options can be derived from model state

**Prerequisites**

- Node.js 16+ (or current LTS)
- npm (or yarn/pnpm) — commands below use `npm`

**Getting started**

1. Install dependencies

```sh
npm install
```

2. Run the development server

```sh
npm run dev
```

3. Build for production

```sh
npm run build
```

4. Preview the production build locally

```sh
npm run preview
```

Notes for Windows (cmd.exe): run the same commands in your project folder.

**Project structure (high level)**

- `src/`
  - `App.tsx` — application root wiring the `ConfigurationTabs` and header
  - `components/` — UI components and layout
    - `layout/ConfigurationTabs.tsx` — main tabbed flow
    - `configurator/` — step-specific UI (Preview, Selector, Summary)
    - `ui/` — small primitives (buttons, card, tabs wrappers)
  - `data/` — data for `cars`, `colors`, `wheels` (used by configuration)
  - `lib/configuration.ts` — step definitions and logic to derive options and images
  - `hooks/` — `useConfigurationQuery` for state + persisted query handling
  - `types/` — project types (CarModel, ColorOption, WheelOption, ConfigurationState)

**How the configurator works**

- `configurationSteps` in `src/lib/configuration.ts` defines the ordered steps. Each step can expose:
  - `getOptions(state)` — returns available options for the step (derived from current state)
  - `getImage(state)` / `getImages(state)` — helper to compute preview images

- The UI component `ConfigurationTabs` maps these steps into tab triggers and content. It calls `getOptions(state)` for each step to render `Selector` options.

**Common issues & debugging tips**

- Empty color/wheels list
  - This can occur if the step's `getOptions` returns an empty array because `selectedCar` is not set. The code attempts to resolve a car from `modelId` when `selectedCar` is missing — make sure `modelId` is set when a model is chosen.
  - Add a small debug log inside the `getOptions` implementation to inspect `modelId` and `selectedCar` at runtime.

- Type errors (example: `string` not assignable to `CarModelId`)
  - Narrow option ids at the parent level (in `App.tsx`) before calling setters (cast to the domain union using `as CarModelId` when appropriate).

- Chrome console error: "A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received"
  - This typically originates from a Chrome extension, not the app. Disable extensions or inspect the extension service worker if the error occurs.

**Adding or editing cars/colors/wheels**

- Data lives in `src/data/` — add new car entries with these important fields:
  - `id` (one of the `CarModelId` union values or extend the union in `src/types`)
  - `name`, `basePrice`
  - `availableColors` — array of color ids
  - `availableWheels` — array of wheel ids
  - `images` — mapping of color id to image path

- Colors and wheels are defined in their respective files (`src/data/colors.ts`, `src/data/wheels.ts`). After adding entries, update the `types/` if you introduced new ids.

**TypeScript & types**

- The app relies on carefully typed ids (`CarModelId`, `ColorId`, `WheelId`) and domain types (`CarModel`, `ColorOption`, `WheelOption`). When changing data shapes, update `src/types/` accordingly.

**Contributing**

- Fork, create a branch for your change, run and verify locally, then open a PR with a description of the change.

**License**

- Check the `LICENSE` file in the repo root.

---

If you want, I can:

- add a short developer checklist (pre-commit hooks, formatting),
- add runtime debug logging into `src/lib/configuration.ts` to help diagnose empty option lists, or
- run the dev server here and verify the flow end-to-end.

Tell me which of those you'd like next.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
