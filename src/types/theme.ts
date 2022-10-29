export interface DefaultTheme {
    id: string;
    name: string;
    colors: Colors;
    font: string;
}

export interface UseTheme {
    theme: DefaultTheme;
    themeLoaded: boolean;
    setMode: (mode: DefaultTheme) => void;
    getFonts: () => string[];
}

export interface FullTheme {
    data: { [themeName: string]: DefaultTheme };
}

interface Colors {
    body: string;
    text: string;
    button: Button;
    link: Link;
}

interface Button {
    text: string;
    background: string;
}

interface Link {
    text: string;
    opacity: number;
}
