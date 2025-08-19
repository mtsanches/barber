import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";

const Home = async () => {
  //busca os dados do database
  const barbershops = await db.barbershop.findMany({});
  const popularbarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  //console.log(barbershops);

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Mauricio</h2>
        <p>Segunda feira, 05 de agosto.</p>

        {/* BUSCA */}
        <div className="mt-6 flex items-center gap-3">
          <Input placeholder="Faça sua busca...." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {/* RECEBE OS VALORES DO SEARCH.TS */}
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                alt={option.title}
                src={option.imageUrl}
                width={16}
                height={16}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agende nos melhores locais aqui."
            src="/banner-01.png"
            className="object-cover rounded-xl"
            fill
          />
        </div>

        <BookingItem />

        {/* RECOMENDADOS */}
        <h2 className="mt-6 mb-3 text-sx font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* POPULARES */}
        <h2 className="mt-6 mb-3 text-sx font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularbarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2025 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default Home;
