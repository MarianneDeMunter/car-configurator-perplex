import darklineImg from "@/assets/wheels/darkline.png";
import biToneImg from "@/assets/wheels/biTone.png";
import vFlowImg from "@/assets/wheels/vFlow.png";

import type { WheelOption } from "@/types";

export const wheels: WheelOption[] = [
  {
    id: "darkline",
    label: "Apex Darkline",
    price: 400,
    image: darklineImg,
  },
  {
    id: "biTone",
    label: "TwinForge Bi-Tone",
    price: 650,
    image: biToneImg,
  },
  {
    id: "vFlow",
    label: "SilverStream V-Flow",
    price: 300,
    image: vFlowImg,
  },
];
