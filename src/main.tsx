import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import "./styles/index.css";
import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>,
);
