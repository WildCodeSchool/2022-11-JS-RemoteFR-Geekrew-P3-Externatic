import LeftCallButton from "../components/LeftCallButton";
import RightCallButton from "../components/RightCallButton";
import ContainerSlider from "../components/ContainerSlider";

function Home() {
  return (
    <div>
      <h1 className="font-jost">
        Nous cassons les codes du recrutement <span>informatique</span>
      </h1>
      <div>
        <LeftCallButton />
        <RightCallButton />
        <ContainerSlider />
      </div>
    </div>
  );
}

export default Home;
