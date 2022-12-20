import { Card, Col, Row, Skeleton, Space, Spin, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { getDailyWeatherByCity } from '../../../services/weatherApi';
import { DailyWeatherByCity, ForecastDay, FormatTypes } from '../../../types/weather';
import { CityWeatherCardGridCarousel } from './GridCarousel/CityWeatherCardGridCarousel';

interface Props {
    city?: string;
}

const { Title, Text } = Typography;

export function CityWeatherCard({ city }: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [dailyWeather, setDailyWeather] = useState({} as DailyWeatherByCity);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const isToday = currentTabIndex === 0;
    const format = useAppSelector((state) => state.format.value);

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

    function temperatureFormatAndType(forecastDay: ForecastDay) {
        if (format === FormatTypes.Celcius) {
            return isToday ? dailyWeather.current.temp_c : forecastDay.day.avgtemp_c || NaN;
        } else {
            return isToday ? dailyWeather.current.temp_f : forecastDay.day.avgtemp_f || NaN;
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

    return (
        <>
            <Card className='full-width weather-card-fade-in'>
                <Tabs
                    onTabClick={(key) => setCurrentTabIndex(Number(key))}
                    activeKey={currentTabIndex.toString()}
                    tabPosition='left'
                    centered={true}
                    tabBarGutter={20}
                    animated
                    tabBarStyle={{
                        borderRight: '1px solid lightblue',
                    }}
                >
                    {dailyWeather?.forecast?.forecastday.map((forecastDay, index) => {
                        if (forecastDay) {
                            return (
                                <Tabs.TabPane
                                    tab={<Title level={5}>{forecastDay.date}</Title>}
                                    key={index}
                                >
                                    <Card className='full-width content-tab'>
                                        <Row>
                                            <Col span={12}>
                                                <Title level={3}>Location</Title>
                                                <Title level={4}>
                                                    {dailyWeather?.location?.country || NaN},{' '}
                                                    {dailyWeather?.location?.name || NaN}
                                                </Title>
                                            </Col>
                                            <Col span={12}>
                                                <Title level={3}>
                                                    {isToday ? 'Now' : 'Average'}
                                                </Title>
                                                <Title level={4}>
                                                    <Space direction='horizontal'>
                                                        <img
                                                            src={
                                                                isToday
                                                                    ? dailyWeather.current.condition
                                                                          .icon
                                                                    : forecastDay?.day?.condition
                                                                          .icon
                                                            }
                                                            className='weather-card-condition-icon'
                                                        />
                                                        <Space direction='vertical'>
                                                            <Title level={4}>
                                                                {temperatureFormatAndType(
                                                                    forecastDay,
                                                                )}
                                                                °
                                                            </Title>
                                                            <Text>
                                                                {isToday
                                                                    ? dailyWeather.current.condition
                                                                          .text
                                                                    : forecastDay?.day?.condition
                                                                          .text || NaN}
                                                            </Text>
                                                        </Space>
                                                    </Space>
                                                </Title>
                                            </Col>
                                        </Row>
                                        <Row className='weather-card-hourly'>
                                            <Col span={24}>
                                                <Title level={3}>Average Visibility</Title>
                                                <Title level={4}>
                                                    {isToday
                                                        ? dailyWeather.current.vis_km
                                                        : forecastDay?.day?.avgvis_km || NaN}{' '}
                                                    Km
                                                </Title>
                                            </Col>
                                        </Row>
                                        <Row className='weather-card-hourly'>
                                            <Title level={3}>Hourly Temperature</Title>
                                        </Row>
                                        <Tabs
                                            animated
                                            style={{
                                                background: '#91def8',
                                                borderRadius: '0.5rem',
                                                height: '19.5rem',
                                            }}
                                            tabBarStyle={{
                                                borderRadius: '0.5rem 0.5rem 0 0',
                                                backgroundColor: '#61a9c1',
                                                padding: '0 1rem 0 1rem',
                                            }}
                                        >
                                            <Tabs.TabPane
                                                tab={<Title level={5}>Temperature</Title>}
                                                key='temp'
                                            >
                                                <CityWeatherCardGridCarousel
                                                    forecastDay={forecastDay}
                                                />
                                            </Tabs.TabPane>
                                            <Tabs.TabPane
                                                tab={<Title level={5}>Wind</Title>}
                                                key='wind'
                                            >
                                                <CityWeatherCardGridCarousel
                                                    forecastDay={forecastDay}
                                                    isWind
                                                />
                                            </Tabs.TabPane>
                                        </Tabs>
                                    </Card>
                                </Tabs.TabPane>
                            );
                        }
                    })}
                </Tabs>
            </Card>
        </>
    );
}
