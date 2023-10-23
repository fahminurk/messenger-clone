"use client";

import Modal from "@/app/components/modal";
import Image from "next/image";

type ImageModalProps = {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ src, isOpen, onClose }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image src={src} alt="Image" fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
