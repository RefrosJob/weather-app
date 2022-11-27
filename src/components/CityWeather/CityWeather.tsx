import { Row } from 'antd';
import React, { useState } from 'react';
import { CityWeatherCard } from './Card/CityWeatherCard';
import { WeatherInput } from './Input/CityWeatherInput';
import { Wrapper } from './style';
import UiCard from '../UI/Card/UICard';

export function CityWeather(): JSX.Element {
    const [city, setCity] = useState('');

    return (
        <Wrapper>
            <UiCard className={`weather-main-card ${city && 'weather-grow'}`}>
                <Row>
                    <WeatherInput
                        onChange={(e) => {
                            setCity(e);
                        }}
                        className='full-width'
                        inputClassName='weather-current-input'
                    />
                </Row>
                <>
                    <Row className={city && 'city-weather-report-body'}>
                        <CityWeatherCard city={city} />
                    </Row>
                </>
            </UiCard>
        </Wrapper>
    );
}
