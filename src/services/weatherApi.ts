import { notification } from 'antd';
import { AutoComplete, CurrentWeatherByCity, DailyWeatherByCity } from '../types/weather';
import { HttpGet } from './api';

const apiKey = '93b41cd7ba28460c89e184507212011';

export async function getWeatherByCity(city: string): Promise<CurrentWeatherByCity> {
    console.log('getWeatherByCity');
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

export async function getDailyWeatherByCity(city: string): Promise<DailyWeatherByCity> {
    // TODO: change request to weather forecast, interfaces are ready
    let result = {} as DailyWeatherByCity;
    try {
        result = await HttpGet<DailyWeatherByCity>(
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
