import { RootState } from '../store';
import { TempFormat, TempFormatTypes } from '../types/weather';
import { slice } from './sliceHelper';

const tempFormat = slice<TempFormat>('tempFormat', TempFormatTypes.Celcius);

export const { set: setTempFormat } = tempFormat.actions;

export const selectFormat = (state: RootState): TempFormat => state.tempFormat.value;

export default tempFormat.reducer;
