import Logo from "@/assets/fastforward_wheel.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-white py-2 shadow-sm md:flex-row md:gap-0">
      <a className="md:absolute md:mx-6 md:my-0" href="/">
        <img src={Logo} className="h-5 w-5 md:h-12 md:w-12" />
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:py-4 lg:px-8">
        <h1 className="text-xl font-bold text-gray-900 md:text-3xl">
          Auto Configurator - Be Perplexed
        </h1>
      </div>
    </header>
  );
}
