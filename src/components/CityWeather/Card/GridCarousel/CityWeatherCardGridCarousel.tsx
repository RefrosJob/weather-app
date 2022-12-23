import { Col, Row, Space, Typography } from 'antd';
import Carousel from 'better-react-carousel';
import React from 'react';
import { useAppSelector } from '../../../../hooks';
import { ForecastDay, Hour, SpeedFormatTypes, TempFormatTypes } from '../../../../types/weather';
import { Wrapper } from './style';

interface Props {
    forecastDay: ForecastDay;
    isWind?: boolean;
}

const { Text } = Typography;

export function CityWeatherCardGridCarousel({ forecastDay, isWind = false }: Props): JSX.Element {
    function generateDayAndNightForecast(forecastDay: ForecastDay) {
        const hourlyForecast = forecastDay.hour;
        const tempFormat = useAppSelector((state) => state.tempFormat.value);
        const speedFormat = useAppSelector((state) => state.speedFormat.value);
        const decideBorder = (index: number) => {
            const style: React.CSSProperties =
                index <= 5 || (index >= 12 && index <= 17)
                    ? { borderBottom: '1.5px solid #FFFFFF' }
                    : {};
            if (!(index === 5 || index === 11 || index === 17 || index === 23)) {
                style.borderRight = '1.5px solid #FFFFFF';
            }
            return style;
        };

        function decideSpeedFormat(hour: Hour) {
            if (speedFormat === SpeedFormatTypes.Kilometers) {
                return `${hour.wind_kph} Km/h | ${hour.wind_dir}`;
            }
            return `${hour.wind_mph} Mph | ${hour.wind_dir}`;
        }

        return hourlyForecast.map((hour, index) => {
            const hoursFromTime = hour.time.split(' ')[1];
            return (
                <Carousel.Item key={index}>
                    <Space className='weather-carousel-space' style={decideBorder(index)}>
                        <Text className='weather-carousel-text'>{`${hoursFromTime} : ${
                            !isWind
                                ? `${
                                      tempFormat === TempFormatTypes.Celcius
                                          ? hour.temp_c
                                          : hour.temp_f
                                  }°`
                                : decideSpeedFormat(hour)
                        }`}</Text>
                        {!isWind ? <img src={hour.condition.icon} width='100%' /> : null}
                    </Space>
                </Carousel.Item>
            );
        });
    }
    return (
        <Wrapper className='custom-better-carousel'>
            <Row className='weather-card-carousel-row'>
                <Col span={24} className='weather-carousel-col'>
                    <Carousel rows={2} cols={6} gap={0}>
                        {generateDayAndNightForecast(forecastDay)}
                    </Carousel>
                </Col>
            </Row>
        </Wrapper>
    );
}
