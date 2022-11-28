import { Card, Col, Row, Skeleton, Spin, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDailyWeatherByCity } from '../../../services/weatherApi';
import { DailyWeatherByCity } from '../../../types/weather';

interface Props {
    city?: string;
}

const { Title } = Typography;

export function CityWeatherCard({ city }: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [dailyWeather, setDailyWeather] = useState({} as DailyWeatherByCity);

    useEffect(() => {
        const initComponent = async () => {
            await init();
        };
        initComponent().catch(console.error);
    }, [city]);

    async function init() {
        setIsLoading(true);
        if (city) {
            // NOTE: Free API plan doesn't allow for forecasts longer than 3 days;
            const dailyWeatherResponse = await getDailyWeatherByCity(city, 3);
            console.log('daily weather: ', dailyWeatherResponse);
            if (dailyWeatherResponse.location && dailyWeatherResponse.forecast.forecastday.length) {
                setDailyWeather(dailyWeatherResponse);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
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

    // TODO: Populate the fields: Hourly chart with selections

    return (
        <>
            <Card className='full-width weather-card-fade-in'>
                <Tabs tabPosition='left'>
                    {dailyWeather?.forecast?.forecastday.map((forecastDay) => {
                        if (forecastDay) {
                            return (
                                <Tabs.TabPane tab={forecastDay.date} key={forecastDay.date}>
                                    <Col span={12}>
                                        <Card className='full-width'>
                                            <Title level={3}>Location</Title>
                                            <Title level={4}>
                                                {dailyWeather?.location?.country || NaN},{' '}
                                                {dailyWeather?.location?.name || NaN}
                                            </Title>
                                        </Card>
                                    </Col>
                                    <Col span={12}>
                                        <Card className='full-width'>
                                            <Title level={3}>Average Temp</Title>
                                            <Title level={4}>
                                                {forecastDay.day.avgtemp_c || NaN}°
                                            </Title>
                                        </Card>
                                    </Col>
                                </Tabs.TabPane>
                            );
                        }
                    })}
                </Tabs>
            </Card>
        </>
    );
}
