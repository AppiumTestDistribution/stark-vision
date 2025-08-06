import CloudLogosSection from "./CloudLogosSection";
import PlatformSupport from "./PlatformSupport";

const SupportSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <PlatformSupport />
          </div>
          <div>
            <CloudLogosSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
