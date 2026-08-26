import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { search: { tripType: 'one-way', from: '', to: '', departDate: '', returnDate: '', passengers: 1 }, selectedFlight: null, booking: null };
const flightSlice = createSlice({
  name: 'flight', initialState,
  reducers: {
    setSearch: (state, action) => { state.search = { ...state.search, ...action.payload }; },
    selectFlight: (state, action) => { state.selectedFlight = action.payload; },
    confirmBooking: (state, action) => { state.booking = action.payload; },
    resetBooking: () => initialState
  }
});
export const { setSearch, selectFlight, confirmBooking, resetBooking } = flightSlice.actions;
export const store = configureStore({ reducer: { flight: flightSlice.reducer } });
