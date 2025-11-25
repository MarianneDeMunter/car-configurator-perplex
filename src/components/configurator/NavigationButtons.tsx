import { Button } from "@/components/ui/button";

type NavigationButtonsProps = {
  onPrev?: () => void;
  onNext?: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
};

export default function NavigationButtons({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: NavigationButtonsProps) {
  return (
    <div className="mt-4 flex justify-between">
      <Button variant="outline" onClick={onPrev} disabled={disablePrev}>
        Vorige
      </Button>

      <Button onClick={onNext} disabled={disableNext}>
        Volgende
      </Button>
    </div>
  );
}
