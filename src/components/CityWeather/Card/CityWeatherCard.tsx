import { ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Skeleton, Space, Spin, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { getDailyWeatherByCity } from '../../../services/weatherApi';
import { DailyWeatherByCity, ForecastDay, TempFormatTypes } from '../../../types/weather';
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
    const tempFormat = useAppSelector((state) => state.tempFormat.value);
    const theme = useAppSelector((state) => state.theme.value);

    useEffect(() => {
        const initComponent = async () => {
            await init();
        };
        initComponent().catch(console.error);
        console.log(theme.colors.header);
    }, [city]);

    async function init() {
        setIsLoading(true);
        if (city) {
            // NOTE: Free API plan doesn't allow for forecasts longer than 3 days;
            const dailyWeatherResponse = await getDailyWeatherByCity(city, 3);
            if (dailyWeatherResponse.location && dailyWeatherResponse.forecast.forecastday.length) {
                setDailyWeather(dailyWeatherResponse);
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }

    function temperatureFormatAndType(forecastDay: ForecastDay) {
        if (tempFormat === TempFormatTypes.Celcius) {
            return isToday ? dailyWeather.current.temp_c : forecastDay.day.avgtemp_c || NaN;
        } else {
            return isToday ? dailyWeather.current.temp_f : forecastDay.day.avgtemp_f || NaN;
        }
    }

    if (!city) {
        return (
            <Row className='full-width'>
                <Card className='full-width full-height weather-inner-card custom-ant-card-body'>
                    <Title level={3}>
                        Hello! Please Enter City Name Above
                        {'      '}
                        <ArrowUpOutlined />
                    </Title>
                </Card>
            </Row>
        );
    }
    if (isLoading) {
        return (
            <div className='full-width full-height  weather-inner-card custom-ant-card-body'>
                <Spin className='custom-spin' tip='Loading...'>
                    <Skeleton paragraph={{ rows: 20 }} className='custom-skeleton' />
                </Spin>
            </div>
        );
    }

    return (
        <>
            <Card className='full-width weather-card-fade-in custom-ant-card-body'>
                <Tabs
                    onTabClick={(key) => setCurrentTabIndex(Number(key))}
                    activeKey={currentTabIndex.toString()}
                    tabPosition='left'
                    centered={true}
                    tabBarGutter={20}
                    animated
                    className='weather-card-day-tabs'
                >
                    {dailyWeather?.forecast?.forecastday.map((forecastDay, index) => {
                        if (forecastDay) {
                            return (
                                <Tabs.TabPane
                                    tab={<Title level={5}>{forecastDay.date}</Title>}
                                    key={index}
                                >
                                    <Card className='full-width content-tab custom-ant-card-body'>
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
                                            className='weather-carousel-tabs custom-carousel-tabs'
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
