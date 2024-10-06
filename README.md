# modal JavaScript to TypeScript project

## Key changes

- index.tsx
  - explicitly type `document.getElementById(’root’)` → TS needs to ensure it is not null because `document.getElementById` can return `null`
  ```tsx
  const rootElement = document.getElementById('root');
  ...
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  ```
  - `HTMLElement` : a base/generic type for all specific HTML element types, like HTMLDivElement, HTMLInputElement, etc
- App.tsx
  - constants are string types
  - `const App: React.FC = () ⇒ {…}` : React.FC (Functional Component)
  - `useState` initial state with type inference
  - event handling functions doesn’t return anything → `void`
  - (line91) `(e: React.ChangeEvent<HTMLInputElement>)` : typing change event from input element - event from an `HTMLInputElement`

## Trouble shooting

1. directory with .tsx files not created after running `tsc`

- change the `.jsx` and `.js` files to `.tsx` and `.ts` (.js -> .ts didn't work, but .js -> .tsx worked)
- check tsconfig.json: added `include`, `exclude`, `outDir`, `module: “ESNext”` , removed `noEmit`(conflicts with `outDir`)

2. tailwindCSS it not being applied

- install tailwind, check configuration
