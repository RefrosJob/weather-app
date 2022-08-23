import { notification } from 'antd';

export async function HttpGet<T>(url: string) {
    return fetch(url).then((response) => response.json()) as Promise<T>;
}
