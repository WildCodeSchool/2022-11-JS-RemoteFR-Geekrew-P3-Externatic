import LeftCallButton from "../components/LeftCallButton";
import RightCallButton from "../components/RightCallButton";

function Home() {
  return (
    <div>
      <h1 className="font-jost font-extrabold text-2xl text-left">
        Nous cassons les codes du recrutement
        <span className="italic text-main"> informatique</span>
      </h1>
      <div className="flex justify-between items-center font-extrabold h-32">
        <LeftCallButton />
        <RightCallButton />
      </div>
    </div>
  );
}

export default Home;
