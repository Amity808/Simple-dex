import { useState } from "react";

interface UseThemeToggleReturn {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeToggle = (initialMode: boolean = true): UseThemeToggleReturn => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialMode);

  const toggleTheme = (): void => {
    setIsDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-mode" : "light-mode";
      return newMode;
    });
  };

  return {
    isDarkMode,
    toggleTheme
  };
};