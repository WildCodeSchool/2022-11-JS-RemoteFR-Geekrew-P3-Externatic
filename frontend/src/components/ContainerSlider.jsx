import React from "react";
import Slider from "./Slider";

function ContainerCarousel() {
  return (
    <div className="m-10">
      <div className="pl-10 mb-1 font-jost font-bold text-2xl text-left tracking-tight">
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
