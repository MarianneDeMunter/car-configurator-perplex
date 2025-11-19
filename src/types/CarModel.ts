import type { ColorId, WheelId } from "@/types";

export type CarModelId = "hatchback" | "sedan" | "suv";

export type CarModel = {
  id: CarModelId;
  name: string;
  basePrice: number;
  availableColors: ColorId[];
  availableWheels: WheelId[];
  images: Record<ColorId, string>;
};
