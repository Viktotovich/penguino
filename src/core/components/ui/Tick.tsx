// Icons
import { Check } from "lucide-react";

type TickProps = {
  para: string;
};

export default function Tick({ para }: TickProps) {
  return (
    <div className="flex items-center gap-2">
      <Check />
      <p className="font-bold">{para}</p>
    </div>
  );
}
