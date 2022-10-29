import { notification } from 'antd';
import { AutoComplete, CurrentWeatherByCity } from '../types/weather';
import { HttpGet } from './api';

const apiKey = '93b41cd7ba28460c89e184507212011';

export async function getCurrentCurrentWeatherByCity(city: string): Promise<CurrentWeatherByCity> {
    let result = {} as CurrentWeatherByCity;
    try {
        result = await HttpGet<CurrentWeatherByCity>(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no}`,
        );
    } catch (e) {
        console.log('HttpGet, ', e);
        notification.open({
            description: 'HttpGet, ' + e,
            message: 'Request Error',
        });
    }

    return result;
}

export async function getCityAutoComplete(query: string): Promise<AutoComplete> {
    let result = [] as AutoComplete;
    try {
        result = await HttpGet<AutoComplete>(
            `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}}`,
        );
    } catch (e) {
        console.log('HttpGet, ', e);
        notification.open({
            description: 'HttpGet, ' + e,
            message: 'Request Error',
        });
    }

    return result;
}
