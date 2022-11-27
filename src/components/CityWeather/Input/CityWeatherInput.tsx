import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
import { getCityAutoComplete } from '../../../services/weatherApi';

interface Props {
    className?: string;
    inputClassName?: string;
    onChange: (data: string) => void;
    setIsLoading?: (isLoading: boolean) => void;
}

type Options = {
    value: string;
}[];

export function WeatherInput({
    className = '',
    inputClassName = '',
    onChange,
    setIsLoading = undefined,
}: Props): JSX.Element {
    const [options, setOptions] = useState([] as Options);

    async function handleSearchWithLoading(searchText: string): Promise<void> {
        if (setIsLoading !== undefined) {
            setIsLoading(true);
            const searchResult = await getCityAutoComplete(searchText);
            if (!searchResult.length) {
                return;
            }
            const optionSet: Options = searchResult.map((result) => {
                return { value: result.name };
            });
            setOptions(optionSet);
            setIsLoading(false);
        }
    }

    async function handleSearch(searchText: string): Promise<void> {
        const searchResult = await getCityAutoComplete(searchText);
        if (!searchResult.length) {
            return;
        }
        const optionSet: Options = searchResult.map((result) => {
            return { value: result.name };
        });
        setOptions(optionSet);
    }

    return (
        <AutoComplete
            options={options}
            onChange={onChange}
            onSearch={setIsLoading ? handleSearchWithLoading : handleSearch}
            className={className}
            filterOption
        >
            <Input
                placeholder='Enter City Name'
                className={inputClassName}
                allowClear
                prefix={<SearchOutlined />}
            />
        </AutoComplete>
    );
}
