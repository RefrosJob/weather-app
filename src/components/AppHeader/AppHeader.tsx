import { CloudOutlined } from '@ant-design/icons';
import { Menu, Typography } from 'antd';
import React from 'react';
import { Wrapper } from './style';

export function AppHeader(): JSX.Element {
    const { Title } = Typography;
    return (
        <Wrapper>
            <div className='app-header-logo'>
                <CloudOutlined className='logo-icon' />
                <Title className='logo-text' level={4}>
                    Weather App
                </Title>
            </div>

            <Menu
                mode='horizontal'
                defaultSelectedKeys={['2']}
                className='app-header-menu'
                items={[{ key: '1', title: 'TODAY', label: 'TODAY' }]}
            />
        </Wrapper>
    );
}
