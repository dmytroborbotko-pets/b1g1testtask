"use client";

import {
  BarcodeFormat,
  BarcodeScanner,
} from "@capacitor-mlkit/barcode-scanning";
import Button from "../button/Button";
import Modal from "./modal";
import { DiscountIcon } from "../Icons";
import { useEffect, useState } from "react";

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
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const cleanupScanner = () => {
    BarcodeScanner.removeAllListeners();
    document.querySelector("body")?.classList.remove("barcode-scanner-active");
    BarcodeScanner.stopScan();
  };

  useEffect(() => {
    checkPermissions();
    return cleanupScanner;
  }, []);

  const checkPermissions = async () => {
    try {
      const { camera } = await BarcodeScanner.checkPermissions();
      setHasPermission(camera === "granted");
    } catch (err) {
      setHasPermission(false);
      setError(
        "Camera permission is required to scan QR codes: " + JSON.stringify(err)
      );
    }
  };

  const handleScanResult = async (result: {
    barcode?: { rawValue: string };
  }) => {
    cleanupScanner();
    setIsScanning(false);
    if (result.barcode) {
      onScan(result.barcode.rawValue);
    }
    onClose();
  };

  const startScan = async () => {
    try {
      const isAvailable = await BarcodeScanner.isSupported();
      if (!isAvailable) {
        throw new Error("Barcode scanner is not available on this device");
      }

      const listener = await BarcodeScanner.addListener(
        "barcodeScanned",
        async (result) => {
          await listener.remove();
          handleScanResult(result);
        }
      );

      document.querySelector("body")?.classList.add("barcode-scanner-active");
      setIsScanning(true);

      await BarcodeScanner.startScan({
        formats: [BarcodeFormat.QrCode],
      });
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : "Failed to scan QR code"
      );
      cleanupScanner();
      setIsScanning(false);
      onClose();
    }
  };

  const requestPermissions = async () => {
    try {
      const { camera } = await BarcodeScanner.requestPermissions();
      setHasPermission(camera === "granted");
      if (camera === "granted") {
        startScan();
      }
    } catch (err) {
      setHasPermission(false);
      setError(
        "Camera permission is required to scan QR codes: " + JSON.stringify(err)
      );
    }
  };

  const handleScanClick = () => {
    setError(null);
    if (hasPermission) {
      startScan();
    } else {
      requestPermissions();
    }
  };

  const renderScannerOverlay = () => (
    <>
      <div className="back-button" onClick={cleanupScanner}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="scanner-overlay">
        <p className="scan-text">Scan a QR Code from your friend app.</p>
        <div className="scan-frame" />
      </div>
    </>
  );

  const renderModalContent = () => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center barcode-scanner-modal">
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

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <Button onClick={handleScanClick} styles="w-full">
          {hasPermission ? "Scan QR" : "Allow Camera & Scan"}
        </Button>
      </div>
    </Modal>
  );

  return <>{isScanning ? renderScannerOverlay() : renderModalContent()}</>;
};
