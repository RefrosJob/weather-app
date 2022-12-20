import { CloudOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Menu, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { Settings } from '../Settings/Settings';
import { Wrapper } from './style';

export function AppHeader(): JSX.Element {
    const { Title } = Typography;
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    function handleSettingsClick() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    return (
        <Wrapper>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col span={3}>
                    <div className='app-header-logo'>
                        <CloudOutlined className='logo-icon' />
                        <Title className='logo-text' level={4}>
                            Weather App
                        </Title>
                    </div>
                </Col>
                <Col span={20}>
                    <Menu
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        className='app-header-menu'
                        items={[{ key: '1', title: 'TODAY', label: 'TODAY' }]}
                    />
                </Col>
                <Col
                    span={1}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}
                >
                    <Button icon={<SettingOutlined />} onClick={handleSettingsClick} />
                </Col>
            </Row>
            <Settings open={isSettingsOpen} onClose={handleSettingsClick} />
        </Wrapper>
    );
}
