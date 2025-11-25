import type { CarModel, ColorOption, WheelOption } from "@/types";

type SummaryProps = {
  model?: CarModel;
  color?: ColorOption;
  wheel?: WheelOption;
};

export default function Summary({ model, color, wheel }: SummaryProps) {
  const total =
    (model?.basePrice ?? 0) + (color?.price ?? 0) + (wheel?.price ?? 0);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Jouw configuratie</h3>

      <div className="space-y-2">
        <div className="flex gap-4">
          <span className="flex-1">Model:</span>
          {model ? (
            <div className="flex flex-4 justify-between">
              <span>{model.name} </span>
              <span>€{model.basePrice} </span>
            </div>
          ) : (
            "-"
          )}
        </div>

        <div className="flex gap-4">
          <span className="flex-1">Kleur:</span>
          {color ? (
            <div className="flex flex-4 justify-between">
              <span>{color.label}</span>
              <span>€{color.price}</span>
            </div>
          ) : (
            "-"
          )}
        </div>

        <div className="flex gap-4">
          <span className="flex-1">Wielen:</span>
          {wheel ? (
            <div className="flex flex-4 justify-between">
              <span>{wheel.label}</span>
              <span>€{wheel.price}</span>
            </div>
          ) : (
            "-"
          )}
        </div>
      </div>

      <hr />

      <div className="flex justify-between text-xl font-bold">
        <span>Totaal</span>
        <span>€{total}</span>
      </div>
    </div>
  );
}
