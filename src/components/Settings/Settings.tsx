import { Drawer, Radio, Space, Switch, Typography } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFromLS } from '../../microservices/storage';
import { useTheme } from '../../microservices/theme';
import { setSpeedFormat } from '../../stores/speedFormatStore';
import { setTempFormat } from '../../stores/tempFormatStore';
import { setTheme } from '../../stores/themeStore';
import { DefaultTheme, FullTheme } from '../../types/theme';
import { SpeedFormatTypes, TempFormatTypes } from '../../types/weather';

interface Props {
    open: boolean;
    onClose: () => void;
}

const { Text, Title } = Typography;

export function Settings({ open, onClose }: Props): JSX.Element {
    const themesFromStore = getFromLS<FullTheme>('all-themes');
    const data = themesFromStore.data;
    const tempFormat = useAppSelector((state) => state.tempFormat.value);
    const speedFormat = useAppSelector((state) => state.speedFormat.value);
    const currentTheme = useAppSelector((state) => state.theme.value);
    const dispatch = useAppDispatch();
    const setThemeDispatch = (theme: DefaultTheme) => dispatch(setTheme(theme));
    const isDarkTheme = currentTheme.name === 'Dark Mode';
    const { setMode } = useTheme();

    function onThemeChange(theme: DefaultTheme) {
        setMode(theme);
        setThemeDispatch(theme);
    }

    return (
        <Drawer title='Settings' open={open} onClose={onClose} className='custom-drawer'>
            <Space direction='vertical'>
                <Title level={4}>Personalisation</Title>
                <Space direction='horizontal'>
                    <Switch
                        checked={isDarkTheme}
                        onChange={() => {
                            isDarkTheme
                                ? onThemeChange(data['light'])
                                : onThemeChange(data['dark']);
                        }}
                    />
                    <Text>Dark Theme</Text>
                </Space>
                <Title level={4}>Format</Title>
                <Title level={5}>Temperature</Title>
                <Space direction='horizontal'>
                    <Radio.Group
                        value={tempFormat}
                        onChange={(e) => dispatch(setTempFormat(e.target.value as TempFormatTypes))}
                    >
                        <Space direction='vertical'>
                            <Radio value={TempFormatTypes.Celcius}>
                                <Text>Celsius</Text>
                            </Radio>
                            <Radio value={TempFormatTypes.Fahrenheit}>
                                <Text>Fahrenheit</Text>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Space>
                <Title level={5}>Speed</Title>
                <Space direction='horizontal'>
                    <Radio.Group
                        value={speedFormat}
                        onChange={(e) =>
                            dispatch(setSpeedFormat(e.target.value as TempFormatTypes))
                        }
                    >
                        <Space direction='vertical'>
                            <Radio value={SpeedFormatTypes.Kilometers}>
                                <Text>Kilometers per hour</Text>
                            </Radio>
                            <Radio value={SpeedFormatTypes.Miles}>
                                <Text>Miles per hour</Text>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Space>
            </Space>
        </Drawer>
    );
}
