import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Selector from "@/components/configurator/Selector";
import type {
  CarModelId,
  CarModel,
  ColorId,
  ColorOption,
  Step,
  WheelId,
  WheelOption,
} from "@/types";
import NavigationButtons from "../configurator/NavigationButtons";
import { useState } from "react";
import Summary from "../configurator/Summary";
import Preview from "../configurator/Preview";

type ConfigurationTabsProps = {
  steps: Step[];
  state: {
    modelId?: CarModelId;
    colorId?: ColorId;
    wheelId?: WheelId;
  };
  selected: {
    selectedCar?: CarModel;
    selectedColor?: ColorOption;
    selectedWheels?: WheelOption;
  };
  onSelect: <T extends string>(stepId: Step["id"], optionId: T) => void;
};

export default function ConfigurationTabs({
  steps,
  state,
  selected,
  onSelect,
}: ConfigurationTabsProps) {
  const [activeStep, setActiveStep] = useState(steps[0]!.id);

  if (!steps.length) return null;

  const goToStep = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= steps.length) return;
    setActiveStep(steps[newIndex]!.id);
  };

  const selectedMap = {
    model: state.modelId,
    color: state.colorId,
    wheels: state.wheelId,
  } as const;

  return (
    <Tabs
      defaultValue={steps[0]!.id}
      value={activeStep}
      onValueChange={(value) => setActiveStep(value as Step["id"])}
    >
      <TabsList>
        {steps.map((step, index) => (
          <TabsTrigger key={step.id} value={step.id}>
            {index + 1} {step.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {steps.map((step, index) => {
        const options = step.getOptions?.(state) ?? [];
        const image = step.getImage?.({
          selectedCar: selected.selectedCar,
          selectedColor: selected.selectedColor,
          selectedWheels: selected.selectedWheels,
        });

        return (
          <TabsContent key={step.id} value={step.id}>
            <h2 className="my-6 text-center text-xl font-bold text-gray-900">
              {step.id === "summary"
                ? "Ben je al Perplex?"
                : `Kies je ${step.label.toLowerCase()}`}
            </h2>
            <div className="flex flex-col items-stretch gap-6 md:flex-row">
              <Card className="flex h-30 flex-2 items-center justify-center md:h-80">
                {step.id === "summary" ? (
                  <Preview
                    carImage={
                      selected.selectedCar && selected.selectedColor
                        ? selected.selectedCar.images[selected.selectedColor.id]
                        : selected.selectedCar?.images.black
                    }
                    wheelImage={selected.selectedWheels?.image}
                  />
                ) : (
                  <img
                    src={image}
                    alt={step.label}
                    className="h-[inherit] object-contain md:max-h-full"
                  />
                )}
              </Card>

              <div className="flex-1">
                <Card className="h-full justify-between px-5">
                  {step.id === "summary" ? (
                    <Summary
                      model={selected.selectedCar}
                      color={selected.selectedColor}
                      wheel={selected.selectedWheels}
                    />
                  ) : (
                    options.length > 0 && (
                      <Selector
                        options={options}
                        selectedId={selectedMap[step.id]}
                        onSelect={(id) => onSelect(step.id, id)}
                      />
                    )
                  )}

                  <NavigationButtons
                    onPrev={() => goToStep(index - 1)}
                    onNext={() => goToStep(index + 1)}
                    disablePrev={index === 0}
                    disableNext={index === steps.length - 1}
                  />
                </Card>
              </div>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
