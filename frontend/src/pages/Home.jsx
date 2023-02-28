import Achievement from "../components/Achievement";
import AllSteps from "../components/AllSteps";
import LeftCallButton from "../components/LeftCallButton";
import RightCallButton from "../components/RightCallButton";
import ContainerSlider from "../components/ContainerSlider";

function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="font-jost font-extrabold text-2xl text-left">
        Nous cassons les codes du recrutement
        <span className="italic text-main">
          {" "}
          infor
          <span className="bg-underline bg-no-repeat bg-bottom">matique </span>
        </span>
      </h1>
      <div className="flex justify-between items-center font-extrabold h-32">
        <LeftCallButton />
        <RightCallButton />
        <ContainerSlider />
      </div>
      <AllSteps />
      <Achievement />
    </div>
  );
}

export default Home;
