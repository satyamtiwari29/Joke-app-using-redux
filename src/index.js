
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./App";
import store from "./Store/store.js";
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
