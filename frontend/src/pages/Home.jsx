import LeftCallButton from "../components/LeftCallButton";
import RightCallButton from "../components/RightCallButton";

function Home() {
  return (
    <div>
      <h1>
        Nous cassons les codes du recrutement <span>informatique</span>
      </h1>
      <div>
        <LeftCallButton />
        <RightCallButton />
      </div>
    </div>
  );
}

export default Home;
