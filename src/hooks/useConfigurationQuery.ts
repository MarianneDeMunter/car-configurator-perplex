import { useQueryState, parseAsStringEnum } from "nuqs";
import { cars, colors, wheels } from "@/data";

type ModelId = (typeof cars)[number]["id"];
type ColorId = (typeof colors)[number]["id"];
type WheelId = (typeof wheels)[number]["id"];

const modelParser = parseAsStringEnum<ModelId>(cars.map((c) => c.id));
const colorParser = parseAsStringEnum<ColorId>(colors.map((c) => c.id));
const wheelParser = parseAsStringEnum<WheelId>(wheels.map((w) => w.id));

export function useConfigurationQuery() {
  const [modelId, setModelId] = useQueryState(
    "model",
    modelParser.withDefault("hatchback").withOptions({ history: "push" }),
  );

  const [colorId, setColorId] = useQueryState(
    "color",
    colorParser.withDefault("black").withOptions({ history: "push" }),
  );

  const [wheelId, setWheelId] = useQueryState(
    "wheels",
    wheelParser.withDefault("darkline").withOptions({ history: "push" }),
  );

  const selectedCar = cars.find((c) => c.id === modelId) ?? cars[0];
  const selectedColor =
    colors.find(
      (c) => c.id === colorId && selectedCar!.availableColors.includes(c.id),
    ) ?? colors.find((c) => selectedCar!.availableColors.includes(c.id))!;
  const selectedWheels =
    wheels.find(
      (w) => w.id === wheelId && selectedCar!.availableWheels.includes(w.id),
    ) ?? wheels.find((w) => selectedCar!.availableWheels.includes(w.id))!;

  const currentImage = selectedCar!.images[selectedColor.id];

  return {
    modelId,
    colorId,
    wheelId,

    selectedCar,
    selectedColor,
    selectedWheels,
    currentImage,

    setModelId,
    setColorId,
    setWheelId,
  };
}
