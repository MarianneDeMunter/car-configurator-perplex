import hatchbackRed from "@/assets/cars/hatchback/red.png";
import hatchbackWhite from "@/assets/cars/hatchback/white.png";
import hatchbackBlack from "@/assets/cars/hatchback/black.png";

import sedanRed from "@/assets/cars/sedan/red.png";
import sedanWhite from "@/assets/cars/sedan/white.png";
import sedanBlack from "@/assets/cars/sedan/black.png";

import suvRed from "@/assets/cars/suv/red.png";
import suvWhite from "@/assets/cars/suv/white.png";
import suvBlack from "@/assets/cars/suv/black.png";

import type { CarModel } from "@/types";

export const cars: CarModel[] = [
  {
    id: "hatchback",
    name: "Hatchback",
    basePrice: 18000,
    availableColors: ["red", "white", "black"],
    availableWheels: ["darkline", "biTone", "vFlow"],
    images: {
      red: hatchbackRed,
      white: hatchbackWhite,
      black: hatchbackBlack,
    },
  },
  {
    id: "sedan",
    name: "Sedan",
    basePrice: 24000,
    availableColors: ["red", "white", "black"],
    availableWheels: ["darkline", "biTone", "vFlow"],
    images: {
      red: sedanRed,
      white: sedanWhite,
      black: sedanBlack,
    },
  },
  {
    id: "suv",
    name: "SUV",
    basePrice: 31000,
    availableColors: ["red", "white", "black"],
    availableWheels: ["darkline", "biTone", "vFlow"],
    images: {
      red: suvRed,
      white: suvWhite,
      black: suvBlack,
    },
  },
];
