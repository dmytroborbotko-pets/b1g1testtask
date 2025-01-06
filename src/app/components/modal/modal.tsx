"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target instanceof Node) {
        const backdropElement = event.target as Element;
        if (backdropElement.classList.contains("modal-backdrop")) {
          onClose();
        }
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop bg-black bg-opacity-50 !mt-0">
      <dialog
        ref={modalRef}
        className="relative bg-white rounded-[16px] p-6 max-w-md w-full mx-4 shadow-xl"
        aria-modal="true"
        open
      >
        <div className="flex justify-end absolute top-4 right-4">
          <button
            onClick={onClose}
            className="bg-[#F7F7F7] rounded-lg w-8 h-8 flex items-center justify-center"
            aria-label="Close modal"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 1.125L17.25 16.875" stroke="#202020" />
              <path d="M17.25 1.125L1.5 16.875" stroke="#202020" />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </dialog>
    </div>
  );
};

export default Modal;
