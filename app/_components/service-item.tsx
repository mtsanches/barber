import Image from "next/image";
import { BarbershopService } from "../generated/prisma";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
  service: BarbershopService;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-3">
        {/* IMAGEM */}
        <div className="relative h-[110px] w-[110px] shrink-0">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-lg"
          />
        </div>

        {/* DIREITA */}
        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="text-sm font-semibold truncate">{service.name}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {service.description}
          </p>

          {/* PREÇO E BOTÃO DE RESERVAR */}
          <div className="flex items-center w-full">
            <p className="font-bold text-sm text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Button variant="secondary" size="sm" className="ml-auto shrink-0">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceItem;
