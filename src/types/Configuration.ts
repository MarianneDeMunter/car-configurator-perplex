import type {
  CarModel,
  CarModelId,
  ColorId,
  ColorOption,
  WheelId,
  WheelOption,
} from "@/types";

export type ConfigurationStepId = "model" | "color" | "wheels" | "summary";

export type Option<T extends string = string> = {
  id: T;
  label: string;
  price?: number;
  image?: string;
};

export type ConfigurationState = {
  modelId?: CarModelId;
  colorId?: ColorId;
  wheelId?: WheelId;

  selectedCar?: CarModel;
  selectedColor?: ColorOption;
  selectedWheels?: WheelOption;

  currentImage?: string;
};

export type Step = {
  id: ConfigurationStepId;
  label: string;
  getOptions?: (state: ConfigurationState) => Option[];
  getImage?: (state: ConfigurationState) => string | undefined;
  getImages?: (state: ConfigurationState) => {
    carImage?: string;
    wheelImage?: string;
  };
};
