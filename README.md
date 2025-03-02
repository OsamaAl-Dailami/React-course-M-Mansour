# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Summary:
Lesson 15 - Conditional Rendering in reactjs
  1. (The conditional)  ? If True : If False
      items.length === 0 ? "Items is empty" : "Items is'n empty"

  2. {The conditional && if True}
      {items.length === 0 && "Items is empty}


Lesson 20 - State VS Props

Lesson 21 - passing children 

Lessons 23 & 24 - Exercises

############################################################
              <h2> styling component </h2>
              - Vanilla CSS , CSS modules , css-in-js , Using CSS library - 

Lesson 26 - Vanilla CSS 

Lesson 27 - CSS Modules

Lesson 28 - CSS-IN-JS  using styled components Library

Lesson 31 - Popular UI Libraries (Bootstrap - Material UI - Tailwind CSS) other (Daisy UI - Chakra UI)

Lesson 32 - Adding react-icons and use it.

Lesson 33 - create Button component using css Modules

Lesson 34 - create Liked Button component

############################################################
                            <h2> Managing Component State </h2>

Lesson 35 to 41 : managing component state - updating object and Nested object using useState Hook


Lesson 42 - 43 : Update Array and Array of objects
