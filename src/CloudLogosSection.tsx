import ltImage from "./assets/lambdatest.png";
import slImage from "./assets/SL.png";
import bsImage from "./assets/BS.png";
import pcImage from "./assets/pcloudy.png";

const CloudLogosSection = () => {
  const providers = [
    {
      name: "BrowserStack",
      src: `${bsImage}`,
      className: "w-30 md:w-30",
    },
    {
      name: "LambdaTest",
      src: `${ltImage}`,
      className: "w-30 md:w-30",
    },
    {
      name: "PCloudy",
      src: `${pcImage}`,
      className: "w-30 md:w-30",
    },
    {
      name: "Sauce Labs",
      src: `${slImage}`,
      className: "w-30 md:w-30",
    },
  ];

  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-16">
          Cloud Support
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-20 max-w-5xl mx-auto">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="aspect-square bg-slate-100 rounded-full p-4 md:p-8 lg:p-12 flex items-center justify-center transform transition-transform hover:scale-105"
            >
              <div className="relative w-full h-full">
                <img
                  src={provider.src}
                  className="absolute inset-0 w-full h-full object-contain p-2 md:p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudLogosSection;
