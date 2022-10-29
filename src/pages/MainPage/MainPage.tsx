import { Layout } from 'antd';
import React from 'react';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { CityWeather } from '../../components/CityWeather/CityWeather';
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
