import { AutoComplete } from 'antd';
import { useState } from 'react';
import { getCityAutoComplete } from '../../../services/weatherApi';

interface Props {
    className?: string;
    onChange: (data: string) => void;
}

type Options = {
    value: string;
}[];

export function WeatherInput({ className = '', onChange }: Props): JSX.Element {
    const [options, setOptions] = useState([] as Options);

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
            placeholder='Enter City Name'
            options={options}
            onChange={onChange}
            onSearch={handleSearch}
            className={className}
            filterOption
        />
    );
}
