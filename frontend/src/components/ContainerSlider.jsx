import React from "react";
import Slider from "./Slider";

function ContainerCarousel() {
  return (
    <div>
      <div className="ml-8 mb-1 font-jost font-semibold text-xl text-left tracking-tight">
        <span className="underline decoration-4 decoration-main">
          Nos offres
        </span>{" "}
        d'emploi
      </div>
      <Slider />
    </div>
  );
}

export default ContainerCarousel;
