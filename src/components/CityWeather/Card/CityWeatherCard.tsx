import { Card, Col, Row, Skeleton, Spin, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../../../services/weatherApi';
import { CurrentWeatherByCity } from '../../../types/weather';

interface Props {
    city?: string;
}

const { Title } = Typography;

export function CityWeatherCard({ city }: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState({} as CurrentWeatherByCity);

    useEffect(() => {
        const initComponent = async () => {
            await init();
        };
        initComponent().catch(console.error);
    }, [city]);

    async function init() {
        setIsLoading(true);
        console.log('city: ', city);
        if (city) {
            console.log('city: ', city);
            const weather = await getWeatherByCity(city);
            if (weather.location) {
                setWeather(weather);
            }
        }
        setIsLoading(false);
    }
    if (!city) {
        return <></>;
    }
    if (isLoading) {
        return (
            <Row className='full-width'>
                <Card className='full-width full-height'>
                    <Spin className='spin' tip='Loading...'>
                        <Skeleton paragraph={{ rows: 6 }} />
                    </Spin>
                </Card>
            </Row>
        );
    }
    return (
        <>
            <Card className='full-width weather-card-fade-in'>
                <Tabs tabPosition='left'>
                    <Tabs.TabPane tab='Tab 1' key='1'>
                        <Col span={12}>
                            <Card className='full-width'>
                                <Title level={3}>Location</Title>
                                <Title level={4}>
                                    {weather?.location?.country || NaN},{' '}
                                    {weather?.location?.name || NaN}
                                </Title>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card className='full-width'>
                                <Title level={3}>Current Weather</Title>
                                <Title level={4}>{weather?.current?.temp_c || NaN}°</Title>
                            </Card>
                        </Col>
                    </Tabs.TabPane>
                </Tabs>
            </Card>
        </>
    );
}
