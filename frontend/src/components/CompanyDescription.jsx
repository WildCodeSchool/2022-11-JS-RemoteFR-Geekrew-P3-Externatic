import React, { useState, useEffect } from "react";
import { useOfferContext } from "../contexts/CreationOfferContext";
import expressAPI from "../services/expressAPI";
import chevronDown from "../assets/Icons/chevron-down.svg";
import chevronUp from "../assets/Icons/chevron-up.svg";
import InputContract from "./InputContract";

function CompanyDescription() {
  const { dispatch } = useOfferContext();
  const [isOpen, setOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [newTechnologiesStatus, setTechnologiesStatus] = useState([]);

  const handleInput = (e) => {
    dispatch({
      type: "HANDLE_INPUT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  useEffect(() => {
    expressAPI
      .get(`/technologies`)
      .then((res) => {
        return res.data.map((obj) => {
          return { ...obj, status: false };
        });
      })
      .then((rawTechno) => setTechnologies(rawTechno));
  }, []);

  const handleCheck = (e) => {
    const technoChecked = parseInt(e.target.id, 10);

    const technologiesStatus = technologies.map((techno) => {
      if (techno.id === technoChecked) {
        return { ...techno, status: !techno.status };
      }
      return techno;
    });

    setTechnologies(technologiesStatus);

    if (
      e.target.checked === true &&
      !newTechnologiesStatus.includes(e.target.id)
    ) {
      setTechnologiesStatus([...newTechnologiesStatus, e.target.id]);
    }
    if (
      e.target.checked === false &&
      newTechnologiesStatus.includes(e.target.id)
    ) {
      const updatedTechnologies = newTechnologiesStatus.filter(
        (id) => id !== e.target.id
      );
      setTechnologiesStatus(updatedTechnologies);
    }
  };
  useEffect(() => {
    const technologiesOffer = newTechnologiesStatus.join(",");

    dispatch({
      type: "HANDLE_TECHNOLOGY",
      payload: technologiesOffer,
    });
  }, [newTechnologiesStatus]);

  return (
    <div className="w-full mt-5">
      <div className="">
        <div className="w-full ">
          <div className="border border mb-5 w-full">
            <label
              htmlFor="base-input"
              className="text-sm font-medium text-grey2 bg-background  w-1/2"
            >
              {" "}
            </label>
            <input
              type="text"
              id="base-input"
              name="title"
              onChange={(e) => handleInput(e)}
              placeholder=" Entrez le titre de l’annonce... "
              className="bg-gray-50 border text-gray-900 text-sm rounded  block w-full p-2.5"
            />
          </div>
          <details className="mb-4">
            <summary className="font-semibold  bg-white rounded-md py-2 px-4">
              Entreprise
            </summary>
            <div className="bg-white mt-5 ">
              <div className="m-6 pb-10 pt-6">
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm text-left font-medium text-grey2 "
                  >
                    {" "}
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="location"
                    placeholder="Localisation du poste"
                    onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm text-left font-medium text-black"
                  >
                    Secteur
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="field"
                    onChange={(e) => handleInput(e)}
                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm text-left font-medium text-black "
                  >
                    Salaire
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="lowerSalary"
                    placeholder="Salaire Min"
                    onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label htmlFor="higher_salary"> </label>
                  <input
                    type="text"
                    id="base-input"
                    name="higherSalary"
                    placeholder="Salaire Max"
                    onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <InputContract />
                  <div className="flex flex-col justify-center md:mr-2 relative text-gray-900 text-sm rounded w-1/2 mt-12 mb-20">
                    <button
                      className="flex text-sm text-black text-left font-medium mb-2 md:ml-2 mt-2 underline hover:no-underline"
                      onClick={() => setOpen(!isOpen)}
                      type="button"
                    >
                      Choisir Technologies{" "}
                      <span className="text-main-dark ml-10 " />
                      {isOpen ? (
                        <img src={chevronUp} alt="fermer" className="h-6 w-6" />
                      ) : (
                        <img
                          src={chevronDown}
                          alt="ouvrir"
                          className="h-6 w-6"
                        />
                      )}
                    </button>
                    <div className="absolute z-10 top-11 bg-white p-3">
                      {technologies.map(
                        (technology) =>
                          isOpen && (
                            <div className="flex" key={technology.id}>
                              <input
                                id={technology.id}
                                name={technology.name}
                                type="checkbox"
                                checked={technology.status}
                                onChange={handleCheck}
                              />
                              <label
                                className="ml-6 text-sm text-black text-left font-medium"
                                htmlFor={technology.name}
                              >
                                {technology.name}
                              </label>
                              <br />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default CompanyDescription;
