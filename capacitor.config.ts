import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.testb1g2.app",
  appName: "testb1g1",
  webDir: "out",
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      backgroundColor: "#FFC632",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
