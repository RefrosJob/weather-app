import { notification } from 'antd';
import { CurrentWeatherByCity } from '../types/weather';
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
