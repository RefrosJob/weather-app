import { RootState } from '../store';
import { Format, FormatTypes } from '../types/weather';
import { slice } from './sliceHelper';

const format = slice<Format>('format', FormatTypes.Celcius);

export const { set } = format.actions;

export const selectFormat = (state: RootState) => state.format.value;

export default format.reducer;
