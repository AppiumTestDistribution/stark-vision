import ltImage from "./assets/lambdatest.png";
import slImage from "./assets/SL.png";
import bsImage from "./assets/BS.png";
import pcImage from "./assets/pcloudy.png";

const CloudLogosSection = () => {
  const providers = [
    {
      name: "BrowserStack",
      src: bsImage,
      className: "w-full",
    },
    {
      name: "LambdaTest",
      src: ltImage,
      className: "w-full",
    },
    {
      name: "PCloudy",
      src: pcImage,
      className: "w-full",
    },
    {
      name: "Sauce Labs",
      src: slImage,
      className: "w-full",
    },
  ];

  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-cyan-400 mb-8 md:mb-12 lg:mb-16">
          Cloud Support
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="aspect-square bg-slate-100 rounded-full p-4 md:p-6 lg:p-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative">
                  <img
                    src={provider.src}
                    alt={provider.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudLogosSection;
