"use client";

import { CopyIcon, MessageCircle, SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
  phone: string;
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado com sucesso.");
  };

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        {/* Botão copiar */}
        <Button
          size="sm"
          variant="outline"
          className="p-2"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          <CopyIcon className="w-4 h-4" />
        </Button>

        {/* Botão Ligar */}
        <a href={`tel:${phone.replace(/\D/g, "")}`} className="ml-auto">
          <Button size="sm" variant="outline">
            Ligar
          </Button>
        </a>

        {/* Botão Whatsapp */}
        <a
          href={`https://wa.me/${phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto"
        >
          <Button size="sm" variant="outline">
            <MessageCircle />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PhoneItem;
