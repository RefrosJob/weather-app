// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setToLS(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLS<T = unknown>(key: string): T {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value) as T;
    }

    return {} as T;
}
