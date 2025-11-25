type PreviewProps = {
  carImage?: string;
  wheelImage?: string;
};

export default function Preview({ carImage, wheelImage }: PreviewProps) {
  console.log("carImage:", carImage);
  console.log("wheelImage:", wheelImage);
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 px-5">
      <div className="flex flex-3 items-center justify-center">
        <img
          src={carImage}
          alt="Selected car"
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          src={wheelImage}
          alt="Selected wheels"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
