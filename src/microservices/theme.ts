import { mapValues, values } from 'lodash';
import { useEffect, useState } from 'react';
import { DefaultTheme } from '../types/theme';
import { setToLS, getFromLS } from './storage';

export function useTheme() {
    const themes = getFromLS('all-themes');
    const [theme, setTheme] = useState(themes.data.light as DefaultTheme);
    const [themeLoaded, setThemeLoaded] = useState(false);

    useEffect(() => {
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
        setThemeLoaded(true);
    }, []);

    function setMode(mode: any) {
        setToLS('theme', mode);
        setTheme(mode);
    }

    function getFonts() {
        const allFonts = values(mapValues(themes.data, 'font'));
        return allFonts;
    }

    return { theme, themeLoaded, setMode, getFonts };
}
