import { configureStore } from '@reduxjs/toolkit';
import qrBannerReducer from './bannerSlice/qr-banner-slice';

export const store = configureStore({
  reducer: {
    qrBanner: qrBannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 