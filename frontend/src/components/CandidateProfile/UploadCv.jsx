// import { useState, useEffect } from "react";

// import expressAPI from "../../services/expressAPI";

function UploadCv() {
  // const [cv, setCv] = useState;

  // useEffect(() => {
  //   expressAPI.get(`/candidates`).then((res) => {
  //     setCv(res.data);
  //   });
  // }, []);

  return (
    <div className="mt-6 flex flex-col md:w-2/3">
      <h2 className="font-semibold">Son CV</h2>
      <button type="button">Télécharger le CV</button>
    </div>
  );
}

export default UploadCv;
