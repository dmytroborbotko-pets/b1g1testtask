"use client";

import {
  BarcodeFormat,
  BarcodeScanner,
} from "@capacitor-mlkit/barcode-scanning";
import Button from "../button/Button";
import Modal from "./modal";
import { DiscountIcon } from "../Icons";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (result: string) => void;
}

export const QRScannerModal = ({
  isOpen,
  onClose,
  onScan,
}: QRScannerModalProps) => {
  const startScan = async () => {
    try {
      const granted = await BarcodeScanner.requestPermissions();
      if (!granted) {
        throw new Error("Permission denied");
      }

      const { barcodes } = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode],
      });
      onClose();
      if (barcodes.length > 0) {
        onScan(barcodes[0].rawValue);
      }
    } catch (error) {
      onClose();
      console.error("Scanning failed:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="bg-[#517226] rounded-full p-2 w-16 h-16 mx-auto mb-10 flex items-center justify-center">
          <DiscountIcon />
        </div>
        <h2 className="text-[20px] font-['Red_Hat_Display'] font-[700] mb-2">
          Get a 5 CHF.- discount
        </h2>
        <p className="text-[16px] font-['Red_Hat_Display'] font-[500] mb-6">
          Ask your friend to open a QR Code in his account settings. Scan the QR
          Code and get a discount.
        </p>

        <Button onClick={startScan} styles="w-full">
          Scan QR
        </Button>
      </div>
    </Modal>
  );
};
