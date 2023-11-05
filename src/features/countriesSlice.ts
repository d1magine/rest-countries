import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICountryApiResponse, CountriesState, ICountry } from '../types/types';

const initialState: CountriesState = {
  status: 'idle',
  data: [],
  error: null,
};

export const fetchCountries = createAsyncThunk<
  ICountry[],
  undefined,
  { rejectValue: string }
>('countries/fetchCountries', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data: ICountryApiResponse[] = response.data;

    return data.map((c) => ({
      flagUrlImg: c.flags.svg,
      commonName: c.name.common,
      nativeName: c.name.nativeName
        ? Object.values(c.name.nativeName)[0].official
        : c.name.official,
      population: c.population,
      region: c.region,
      subregion: c.subregion,
      capital: c.capital,
      tld: c.tld,
      currencies: c.currencies
        ? Object.values(c.currencies).map((curr) => curr.name)
        : undefined,
      languages: c.languages ? Object.values(c.languages) : undefined,
      borders: c.borders,
      cca3: c.cca3,
    }));
  } catch (error) {
    return rejectWithValue('Failed to fetch countries!');
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';

        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default countriesSlice.reducer;
