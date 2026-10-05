import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import "./i18n/config";
import "./styles/index.css";
import { App } from "./App.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{ path: "/", element: <App />, errorElement: <ErrorPage /> },
	{ path: "*", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<RouterProvider router={router} />
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>,
);
