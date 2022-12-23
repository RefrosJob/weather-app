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

    async function handleSearch(searchText: string): Promise<Options | undefined> {
        let optionSet: Options;
        if (setIsLoading !== undefined) {
            setIsLoading(true);
            const searchResult = await getCityAutoComplete(searchText);
            if (!searchResult.length) {
                return;
            }
            optionSet = searchResult.map((result) => {
                return { value: result.name };
            });
            setOptions(optionSet);
            setIsLoading(false);
        } else {
            const searchResult = await getCityAutoComplete(searchText);
            if (!searchResult.length) {
                return;
            }
            optionSet = searchResult.map((result) => {
                return { value: result.name };
            });
            setOptions(optionSet);
        }
        return optionSet;
    }
    return (
        <AutoComplete
            options={options}
            onChange={onChange}
            onSearch={handleSearch}
            className={className}
            filterOption
            allowClear
        >
            <Input
                placeholder='Enter City Name'
                className={inputClassName}
                prefix={<SearchOutlined />}
            />
        </AutoComplete>
    );
}
