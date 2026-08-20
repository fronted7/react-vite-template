# React Vite Template

React + Vite + TypeScript boilerplate with linting, formatting, testing, and CI/CD already set up.

## Stack

- **Vite** as build tool, with React Compiler already wired in.
- **React 19** + React Compiler for automatic memoization.
- **TypeScript** in strict mode.
- **Oxlint** for linting. Rust-based, much faster than ESLint, covers `jsx-a11y` and `react-hooks` natively.
- **Prettier** + `prettier-plugin-tailwindcss` for formatting and Tailwind class sorting on save.
- **Tailwind CSS v4** for styling.
- **shadcn/ui** (Base UI, Vega style) for components. Copy-in, not a dependency. `Button` is included as an example, add more with `npx shadcn@latest add` (use Space to select and Enter to submit) or `npx shadcn@latest add <component>` to add only one.
- **Vitest** + Testing Library + `@vitest/coverage-v8` for testing. One example test included (App.test.tsx).
- **GitHub Actions** for CI. Runs lint, test, and build on every push and PR.

## Why Oxlint

Oxlint used to lag behind ESLint's plugin ecosystem. As of 2026 it natively supports `jsx-a11y` and `react-hooks`, the two plugins this template relies on most, and runs a lot faster. For anything it doesn't cover natively, it also supports ESLint-compatible JS plugins (`oxlint-plugin-query` for TanStack Query is one example, used in downstream projects built from this template).

## Why Base UI

shadcn/ui made Base UI (built by the original Radix team, now under MUI) the default primitive engine in July 2026. It's actively maintained and has primitives Radix never had, like Combobox and Number Field.

Base UI uses a `render` prop instead of Radix's `asChild`. Keep that in mind if you're copying examples from older shadcn docs.

## Getting started

1. Click "Use this template" on GitHub, or `Code → Create repository from template`.
2. Clone your new repo and install dependencies:

```bash
   npm install
```

3. Copy the env file and fill in your own values:

```bash
   cp .env.example .env
```

4. Start the dev server:

```bash
   npm run dev
```

> **Note:** `App.tsx` and `App.test.tsx` are just a starting example. If you change `App.tsx`, either update `App.test.tsx` to match, or delete it (and adjust the `test` script in `package.json` to `vitest run --passWithNoTests` if you'd rather not write tests right away).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run Oxlint
- `npm run test` — run tests once
- `npm run test:coverage` — run tests with coverage report

## Adding shadcn/ui components

The `@/` alias and Tailwind theme are already configured.

```bash
npx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. That folder is excluded from some lint/analysis rules (`only-export-components`, `jsx-a11y/prefer-tag-over-role`, SonarQube), since it's generated code you're not meant to hand-edit.

## VS Code setup

`.vscode/settings.json` and `.vscode/extensions.json` are committed to the repo. Opening it in VS Code will prompt you to install the recommended extensions: Oxc, Prettier, Tailwind CSS IntelliSense, GitHub Actions, Vitest Explorer, SonarQube, and a few others.

Path Intellisense picks up the `@/*` alias automatically from `tsconfig.json`, no extra config needed.

## CI

Every push and pull request to `main` runs:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

Check the Actions tab on GitHub if a run fails.

## Suggestions

Found a bug or have an idea to improve this template? Open an [issue](https://github.com/fronted7/react-vite-template/issues).

## License

MIT

---

Built by **Edgar Hidalgo**
[GitHub](https://github.com/fronted7) · [LinkedIn](https://linkedin.com/in/edgarhidalgo)

---

_All code and technical decisions in this template (Oxlint over ESLint, Base UI over Radix, the Vega style, folder structure, etc.) are mine. I used Claude to help with research and to draft this README._
