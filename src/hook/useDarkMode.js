import { useState, useEffect } from "react";

export default function useDarkMode() {

    const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;      
    const systemTheme = preferLight ? 'light' : 'dark';
    
    const [theme, setTheme] = useState(systemTheme);
    const colorTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme], colorTheme)

    return [colorTheme, setTheme];
}