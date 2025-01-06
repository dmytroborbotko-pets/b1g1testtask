import { Shop } from "@/app/types/shop";
import { getApiUrl } from "@/app/utils/url";

class ShopService {
  private static instance: ShopService;

  public static getInstance(): ShopService {
    if (!ShopService.instance) {
      ShopService.instance = new ShopService();
    }
    return ShopService.instance;
  }

  async getShops(): Promise<Shop[]> {
    try {
      const response = await fetch(getApiUrl('api/shops'));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching shops:", error);
      throw error;
    }
  }
}

export const shopService = ShopService.getInstance();
