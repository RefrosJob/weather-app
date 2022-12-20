import { Drawer, Radio, Space, Switch, Typography } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { set } from '../../stores/formatStore';
import { FormatTypes } from '../../types/weather';

interface Props {
    open: boolean;
    onClose: () => void;
}

const { Text, Title } = Typography;

export function Settings({ open, onClose }: Props) {
    const format = useAppSelector((state) => state.format.value);
    const dispatch = useAppDispatch();
    return (
        <Drawer title='Settings' open={open} onClose={onClose}>
            <Space direction='vertical'>
                <Title level={4}>Personalisation</Title>
                <Space direction='horizontal'>
                    <Switch />
                    <Text>Dark Theme</Text>
                </Space>
                <Title level={4}>Format</Title>
                <Title level={5}>Temperature</Title>
                <Space direction='horizontal'>
                    <Radio.Group
                        value={format}
                        onChange={(e) => dispatch(set(e.target.value as FormatTypes))}
                    >
                        <Space direction='vertical'>
                            <Radio value={FormatTypes.Fahrenheit}>
                                <Text>Fahrenheit</Text>
                            </Radio>
                            <Radio value={FormatTypes.Celcius}>
                                <Text>Celsius</Text>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Space>
                <Title level={5}>Speed</Title>
                <Space direction='horizontal'>
                    <Radio.Group
                        value={format}
                        onChange={(e) => dispatch(set(e.target.value as FormatTypes))}
                    >
                        <Space direction='vertical'>
                            <Radio value={FormatTypes.Fahrenheit}>
                                <Text>Miles per hour</Text>
                            </Radio>
                            <Radio value={FormatTypes.Celcius}>
                                <Text>Kilometers per hour</Text>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Space>
            </Space>
        </Drawer>
    );
}
