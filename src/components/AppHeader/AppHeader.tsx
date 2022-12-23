import { CloudOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../../stores/cityStore';
import { WeatherInput } from '../CityWeather/Input/CityWeatherInput';
import { Settings } from '../Settings/Settings';
import { Wrapper } from './style';

export function AppHeader(): JSX.Element {
    const { Title } = Typography;
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const dispatch = useDispatch();

    function handleSettingsClick() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    return (
        <Wrapper>
            <Row>
                <Col span={3}>
                    <div className='app-header-logo'>
                        <CloudOutlined className='logo-icon' />
                        <Title className='logo-text' level={4}>
                            Weather App
                        </Title>
                    </div>
                </Col>
                <Col span={20}>
                    <WeatherInput
                        className='full-width'
                        inputClassName='weather-current-input'
                        onChange={(data: string) => {
                            dispatch(set(data));
                        }}
                    />
                </Col>
                <Col span={1} className='header-settings-column'>
                    <Button
                        icon={<SettingOutlined />}
                        onClick={handleSettingsClick}
                        className='custom-button settings-button'
                    />
                </Col>
            </Row>
            <Settings open={isSettingsOpen} onClose={handleSettingsClick} />
        </Wrapper>
    );
}
