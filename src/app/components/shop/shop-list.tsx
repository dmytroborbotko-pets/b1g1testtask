"use client";

import Button from "@/app/components/button/Button";
import ShopCard from "@/app/components/shop-card/shop-card";
import { useShops } from "@/app/hooks/use-shops";
import { useState } from "react";
import Modal from "../modal/modal";
import { useAppSelector } from "@/app/store/hooks";

interface ShopListProps {
  searchQuery: string;
}

export default function ShopList({ searchQuery }: Readonly<ShopListProps>) {
  const { shops, loading, error } = useShops();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Subscription Confirmation</h2>
          <p className="mb-6">
            Are you sure you want to purchase this subscription?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm Purchase
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
