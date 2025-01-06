import React from "react";
import Modal from "./modal";
import { CheckIcon } from "../Icons";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="bg-[#517226] rounded-full p-2 w-16 h-16 mx-auto mb-8 flex items-center justify-center">
          <CheckIcon />
        </div>
        <h2 className="text-[20px] font-['Red_Hat_Display'] font-[700] mb-2">
          Discount addeed
        </h2>
      </div>
    </Modal>
  );
};

export default SuccessModal;
