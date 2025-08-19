import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO receber agendamento como prop
const BookingItem = () => {
  return (
    <>
      {/* AGENDADOS */}
      <h2 className="mt-6 mb-3 text-sx font-bold uppercase text-gray-400">
        Agendamentos
      </h2>

      <Card className="mt-1">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge>Confirmado</Badge>
            <h3 className="font-bold">Corte de Cabelo</h3>
            <div className="flex items-center  gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
              </Avatar>
              <p className="text-sm">Barbearia XYZ</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">05</p>
            <p className="text-sm">08:00 hs</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BookingItem;
