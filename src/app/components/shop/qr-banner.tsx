"use client";

import { QRIcon } from "@/app/components/Icons";
import { useState } from "react";
import { QRScannerModal } from "../modal/qr-scanner-modal";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { hideQRBanner } from "@/app/store/bannerSlice/qr-banner-slice";

export const QRBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.qrBanner.isVisible);

  const handleScan = (result: string) => {
    console.log("QR Code scanned:", result);
    dispatch(hideQRBanner());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <button
        className="w-full bg-[#FFC632] rounded-2xl p-3 flex justify-between items-center"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open QR code scanner"
        tabIndex={0}
      >
        <div className="text-left">
          <h2 className="text-[16px] font-['Red_Hat_Display'] font-[700] mb-1 text-[#202020] text-left">
            Get a discount
          </h2>
          <p className="text-[16px] font-['Red_Hat_Display'] font-[600] text-[#202020] text-left">
            Scan a QR Code from your friend&apos;s account and get 5.-{" "}
            <strong>CHF</strong> discount!
          </p>
        </div>
        <div className="bg-white p-4 rounded-[14px]">
          <QRIcon />
        </div>
      </button>

      <QRScannerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScan={handleScan}
      />
    </>
  );
};
