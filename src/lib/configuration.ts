import { cars, colors, wheels } from "@/data";
import type { ConfigurationState, Step, ConfigurationStepId } from "@/types";

export const configurationSteps: Step[] = [
  {
    id: "model",
    label: "Model",
    getOptions: ({ selectedColor }: ConfigurationState) =>
      cars.map((c) => ({
        id: c.id,
        label: c.name,
        price: c.basePrice,
        image: selectedColor ? c.images[selectedColor.id] : c.images.black,
      })),
    getImage: ({ selectedCar, selectedColor }: ConfigurationState) =>
      selectedCar
        ? selectedColor
          ? selectedCar.images[selectedColor.id]
          : selectedCar.images.black
        : undefined,
  },

  {
    id: "color",
    label: "Kleur",
    getOptions: ({ selectedCar, modelId }: ConfigurationState) => {
      const car = selectedCar ?? cars.find((c) => c.id === modelId);
      if (!car) return [];
      return colors
        .filter((color) => car.availableColors.includes(color.id))
        .map((c) => ({ id: c.id, label: c.label, price: c.price }));
    },
    getImage: ({ selectedCar, selectedColor, modelId }: ConfigurationState) => {
      const car = selectedCar ?? cars.find((c) => c.id === modelId);
      return car
        ? selectedColor
          ? car.images[selectedColor.id]
          : car.images.white
        : undefined;
    },
  },

  {
    id: "wheels",
    label: "Wielen",
    getOptions: ({ selectedCar, modelId }: ConfigurationState) => {
      const car = selectedCar ?? cars.find((c) => c.id === modelId);
      if (!car) return [];
      return wheels
        .filter((w) => car.availableWheels.includes(w.id))
        .map((w) => ({
          id: w.id,
          label: w.label,
          price: w.price,
          image: w.image,
        }));
    },
    getImage: ({ selectedWheels }: ConfigurationState) => selectedWheels?.image,
  },

  {
    id: "summary",
    label: "Samenvatting",
    getImages: ({
      selectedCar,
      selectedColor,
      selectedWheels,
    }: ConfigurationState) => {
      const carImage =
        selectedCar && selectedColor
          ? selectedCar.images[selectedColor.id]
          : selectedCar?.images.white;

      const wheelImage = selectedWheels?.image;

      return { carImage, wheelImage };
    },
  },
];

export const getStep = (id: ConfigurationStepId): Step | undefined =>
  configurationSteps.find((step) => step.id === id);
