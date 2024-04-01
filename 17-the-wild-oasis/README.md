npm create vite@4 or @latest
projectname: oasis
react
Javasciprt or Typescript

cd directory
npm install
npm run dev
localhost:5173

npm i --save-dev vite-plugin -eslint eslint-config-react-app eslint

create .eslintrc.json
add
{
"extends": "react-app"
}

in vite.config.js
add
import eslint from "vite-plugin-eslint";

export default defineConfig({
plugins: [react(), eslint],
});

npm i @tanstack/react-querry@4 to install react-query
npm i @tanstack/react-query-devtools@4
npm i date-fns //for date js
npm i react-hot-toast
npm i react-hook-form@7
npm install react-icons
npm i styled-components
in vscode market, install vscode-styled-components

npm i recharts@2 // install charts library
npm i react-error-boundary
