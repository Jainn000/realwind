import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import Page from "./routes"

import "./styles/global.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Page />
    </HashRouter>
  </StrictMode>
)
