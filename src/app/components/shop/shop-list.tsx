"use client";

import ShopCard from "@/app/components/shop-card/shop-card";
import { useShops } from "@/app/hooks/use-shops";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import SuccessModal from "../modal/success-modal";

interface ShopListProps {
  searchQuery: string;
}

export default function ShopList({ searchQuery }: Readonly<ShopListProps>) {
  const { shops, loading, error } = useShops();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isQRBannerVisible = useAppSelector((state) => state.qrBanner.isVisible);

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="text-center py-4">Loading shops...</div>;
  if (error)
    return <div className="text-red-500 text-center py-4">{error}</div>;
  if (!shops.length)
    return <div className="text-center py-4">No shops found</div>;

  return (
    <>
      <div className="space-y-4">
        {filteredShops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            isQRBannerVisible={isQRBannerVisible}
          />
        ))}
      </div>

      {!isQRBannerVisible && (
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
