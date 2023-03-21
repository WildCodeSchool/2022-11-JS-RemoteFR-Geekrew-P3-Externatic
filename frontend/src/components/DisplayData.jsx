import { useCandidateContext } from "../contexts/CandidateContext";

function DisplayData() {
  const { formState } = useCandidateContext();
  return (
    <div>
      <p>Firstname:{formState.firstname}</p>
      <p>Lastname:{formState.lastname}</p>
    </div>
  );
}

export default DisplayData;
