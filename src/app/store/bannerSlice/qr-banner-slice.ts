import { createSlice } from '@reduxjs/toolkit';

interface QRBannerState {
  isVisible: boolean;
}

const initialState: QRBannerState = {
  isVisible: true,
};

export const qrBannerSlice = createSlice({
  name: 'qrBanner',
  initialState,
  reducers: {
    hideQRBanner: (state) => {
      state.isVisible = false;
    },
    showQRBanner: (state) => {
      state.isVisible = true;
    },
  },
});

export const { hideQRBanner, showQRBanner } = qrBannerSlice.actions;
export default qrBannerSlice.reducer; 