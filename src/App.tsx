import ConfigurationTabs from "./components/layout/ConfigurationTabs";
import Header from "./components/layout/Header";
import { configurationSteps } from "@/lib/configuration";
import { useConfigurationQuery } from "./hooks/useConfigurationQuery";
import type { CarModelId, ColorId, WheelId } from "./types";

function App() {
  const {
    modelId,
    colorId,
    wheelId,
    setModelId,
    setColorId,
    setWheelId,
    selectedCar,
    selectedColor,
    selectedWheels,
  } = useConfigurationQuery();

  const state = { modelId, colorId, wheelId };
  const selected = { selectedCar, selectedColor, selectedWheels };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ConfigurationTabs
          steps={configurationSteps}
          state={state}
          selected={selected}
          onSelect={(stepId, optionId) => {
            switch (stepId) {
              case "model":
                void setModelId(optionId as CarModelId);
                break;
              case "color":
                void setColorId(optionId as ColorId);
                break;
              case "wheels":
                void setWheelId(optionId as WheelId);
                break;
            }
          }}
        />
      </main>
    </div>
  );
}

export default App;
