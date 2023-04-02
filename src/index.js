import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const names = [
  {
    id: 1,
    name: "Daniel",
    phone: 123456
  },
  {
    id: 2,
    name: "Juan",
    phone: 453356
  }
];

root.render(
  <StrictMode>
    <App personsNames={names} />
  </StrictMode>
);
