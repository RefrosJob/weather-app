export interface DefaultTheme {
    id: string;
    name: string;
    colors: Colors;
    font: string;
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
