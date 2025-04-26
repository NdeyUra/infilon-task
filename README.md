# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

src/
│
├── app/
│   └── store.js                  # Redux store configuration
│
├── components/
│   ├── TabOne.jsx                # Wikipedia iframe tab
│   ├── TabTwo.jsx                # API data and navigation button
│   ├── TabThree.jsx              # Recursive function implementation
│   ├── TabView.jsx               # Main tab container component
│   └── TabView.scss              # Styles for tab components
│
├── features/
│   └── tabs/
│       └── tabsSlice.js          # Redux slice for tab state
│
├── App.jsx                       # Root application component
├── App.scss                      # Main application styles
├── main.jsx                      # Entry point
└── index.scss                    # Global styles
│
├── eslint.config.js               # ESLint configuration
