import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Theme } from "../types/theme";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	function toggleTheme() {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

