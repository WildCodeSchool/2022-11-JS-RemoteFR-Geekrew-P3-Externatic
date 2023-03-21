import { useCurrentUserContext } from "../contexts/CurrentUserContext";

function ShowData() {
  const { formState } = useCurrentUserContext();
  return (
    <>
      <p>Firstname:{formState.firstname}</p>
      <p>Lastname:{formState.lastname}</p>
    </>
  );
}

export default ShowData;
