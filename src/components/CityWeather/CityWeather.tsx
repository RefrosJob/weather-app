import React from 'react';
import { CityWeatherCard } from './Card/CityWeatherCard';
import { Wrapper } from './style';
import UiCard from '../UI/Card/UICard';
import { useAppSelector } from '../../hooks';

export function CityWeather(): JSX.Element {
    const city = useAppSelector((store) => store.city.value);

    return (
        <Wrapper>
            <UiCard className={`weather-main-card ${city && 'weather-grow'} custom-ant-card-body`}>
                <CityWeatherCard city={city} />
            </UiCard>
        </Wrapper>
    );
}
