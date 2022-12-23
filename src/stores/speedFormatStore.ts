import { RootState } from '../store';
import { SpeedFormat, SpeedFormatTypes } from '../types/weather';
import { slice } from './sliceHelper';

const speedFormat = slice<SpeedFormat>('speedFormat', SpeedFormatTypes.Kilometers);

export const { set: setSpeedFormat } = speedFormat.actions;

export const selectFormat = (state: RootState): SpeedFormat => state.speedFormat.value;

export default speedFormat.reducer;
