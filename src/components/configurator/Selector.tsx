import { Button } from "../ui/button";
import type { Option } from "@/types";
import clsx from "clsx";

type SelectorProps = {
  options: Option<string>[];
  selectedId?: string;
  onSelect: (value: string) => void;
};

export default function Selector({
  options,
  selectedId,
  onSelect,
}: SelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => {
        const isSelected = option.id === selectedId;

        return (
          <Button
            key={option.id}
            size="lg"
            variant={isSelected ? "secondary" : "outline"}
            onClick={() => onSelect?.(option.id)}
            className={clsx(
              "flex justify-between",
              isSelected && "ring-2 ring-black",
            )}
          >
            <p>{option.label}</p>
            <p>€ {option.price}</p>
          </Button>
        );
      })}
    </div>
  );
}
