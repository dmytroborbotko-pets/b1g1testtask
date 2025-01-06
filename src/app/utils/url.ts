import { Capacitor } from "@capacitor/core";

export function getApiUrl(path: string): string {
  console.log(Capacitor.isNativePlatform());
  const baseUrl = Capacitor.isNativePlatform()
    ? "http://192.168.0.143:3000" // Android emulator localhost
    : "http://localhost:3000";

  return `${baseUrl}${path}`;
}
