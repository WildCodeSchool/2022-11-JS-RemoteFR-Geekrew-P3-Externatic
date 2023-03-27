import React from "react";
import Slider from "./Slider";

function ContainerCarousel() {
  return (
    <div>
      <div className="ml-8 mb-1 font-jost font-semibold text-xl text-left tracking-tight md:text-5xl md:mb-16">
        <span className="underline decoration-4 decoration-main">
          Nos offres
        </span>{" "}
        d'emploi
      </div>
      <div className="md:w-full md:mb-16">
        <Slider />
      </div>
    </div>
  );
}

export default ContainerCarousel;
