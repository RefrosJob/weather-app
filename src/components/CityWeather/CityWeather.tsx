import { Card, Col, Input, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCurrentCurrentWeatherByCity } from '../../services/weatherApi';
import { CurrentWeatherByCity } from '../../types/weather';
import { Wrapper } from './style';

export function CityWeather(): JSX.Element {
    const { Title } = Typography;

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({} as CurrentWeatherByCity);

    useEffect(() => {
        handleInput();
    }, [city]);

    async function handleInput() {
        const weather = await getCurrentCurrentWeatherByCity(city);
        if (weather.location) {
            setWeather(weather);
        }
    }
    return (
        <Wrapper>
            <Row>
                <Input
                    placeholder='Enter City Name'
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                />
            </Row>
            <Row className='city-weather-report-body'>
                <Col span={12}>
                    <Card className='full-width'>
                        <Title level={3}>Location</Title>
                        <Title level={4}>
                            {weather?.location?.country || NaN}, {weather?.location?.name || NaN}
                        </Title>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className='full-width'>
                        <Title level={3}>Current Weather</Title>
                        <Title level={4}>{weather?.current?.temp_c || NaN}°</Title>
                    </Card>
                </Col>
            </Row>
        </Wrapper>
    );
}
