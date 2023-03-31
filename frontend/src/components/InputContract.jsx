import React, { useState, useEffect } from "react";
import { useOfferContext } from "../contexts/CreationOfferContext";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";

function InputContract() {
  const { dispatch } = useOfferContext();
  const [contracts, setContract] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [typeContract, setTypeContract] = useState([]);

  useEffect(() => {
    expressAPI
      .get(`/contracts`)
      .then((res) => {
        return res.data.map((obj) => {
          return { ...obj, status: false };
        });
      })
      .then((rawContract) => setContract(rawContract));
  }, []);
  const handleCheck = (e) => {
    const contractChecked = parseInt(e.target.id, 10);

    const newContractStatus = contracts.map((contr) => {
      if (contr.id === contractChecked) {
        return { ...contr, status: !contr.status };
      }
      return { ...contr, status: false };
    });

    setContract(newContractStatus);

    if (e.target.checked === true && !typeContract.includes(e.target.id)) {
      setTypeContract([e.target.id]);
    }
    if (e.target.checked === false && typeContract.includes(e.target.id)) {
      setTypeContract([]);
    }
  };
  useEffect(() => {
    const ContractForm = typeContract.join(",");

    dispatch({
      type: "HANDLE_CONTRACT",
      payload: ContractForm,
    });
  }, [typeContract]);
  return (
    <div className="flex flex-col justify-center md:mr-2 relative  text-gray-900 text-sm rounded w-1/2 mt-5 mb-14">
      <button
        className="flex text-sm text-black text-left font-medium mb-2 md:ml-8 mt-2 5 underline hover:no-underline"
        onClick={() => setOpen(!isOpen)}
        type="button"
      >
        Contract <span className="text-main-dark ml-20 " />
        {isOpen ? (
          <img src={chevronUp} alt="fermer" className="h-6 w-6" />
        ) : (
          <img src={chevronDown} alt="ouvrir" className="h-6 w-6" />
        )}
      </button>
      <div className="absolute z-10 top-11 bg-white p-3 mt-5">
        {contracts.map(
          (contract) =>
            isOpen && (
              <div className="flex" key={contract.id}>
                <input
                  id={contract.id}
                  name={contract.type}
                  type="checkbox"
                  checked={contract.status}
                  onChange={handleCheck}
                />
                <label
                  className="ml-6 text-sm text-black text-left font-medium"
                  htmlFor={contract.type}
                >
                  {contract.type}
                </label>
                <br />
              </div>
            )
        )}
      </div>
    </div>
  );
}
export default InputContract;
