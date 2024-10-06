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

문제1. tsc 명령어를 쳤는데 .tsx 파일을 담은 디렉토리 생성 안됨

- change the .jsx .js file → .tsx, .ts (.js 를 .ts로 했을 때 트랜스파일이 안됐었음. .js→ .tsx 로 바꾸니 됨.
- tsconfig.json 설정 확인: include, exclude, outDir, module: “ESNext” 추가, noEmit 삭제(outDir 와 모순됨) (chatGPT 이용)

문제2. tailwind 적용이 안됨.

- install tailwind, configuration 확인
