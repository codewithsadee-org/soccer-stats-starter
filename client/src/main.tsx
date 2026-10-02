/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

/**
 * Styles
 */
import "@/index.css"

/**
 * Components
 */
import { App } from "@/App"

/**
 * Providers
 */
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
