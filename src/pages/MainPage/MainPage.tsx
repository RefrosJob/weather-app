import { CloudOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Menu, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { CityWeather } from '../../components/CityWeather/CityWeather';
import { getWeatherByCity } from '../../services/weatherApi';
import { WeatherByCity, WeatherError } from '../../types/weather';
import { Wrapper } from './style';

export function AppPage(): JSX.Element {
    const { Header, Content, Footer } = Layout;

    return (
        <Wrapper>
            <Layout className='layout app-layout'>
                <Header className='app-header'>
                    <AppHeader />
                </Header>
                <Content className='app-content'>
                    <CityWeather />
                </Content>
                <Footer className='app-footer'></Footer>
            </Layout>
        </Wrapper>
    );
}
