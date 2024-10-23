import ltImage from "./assets/lambdatest.png";
import slImage from "./assets/SL.png";
import bsImage from "./assets/BS.png";
import pcImage from "./assets/pcloudy.png";

const CloudLogosSection = () => {
  const providers = [
    {
      name: "BrowserStack",
      src: `${bsImage}`,
      className: "w-32 md:w-40",
    },
    {
      name: "LambdaTest",
      src: `${ltImage}`,
      className: "w-32 md:w-40",
    },
    {
      name: "PCloudy",
      src: `${pcImage}`,
      className: "w-32 md:w-40",
    },
    {
      name: "Sauce Labs",
      src: `${slImage}`,
      className: "w-32 md:w-40",
    },
  ];

  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Cloud Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {providers.map((provider) => (
            <div
              key={provider.name}
              className="bg-slate-100 rounded-lg p-6 flex items-center justify-center"
            >
              <img
                src={provider.src}
                alt={`${provider.name} Logo`}
                className={`${provider.className} h-auto object-contain mix-blend-normal`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudLogosSection;
