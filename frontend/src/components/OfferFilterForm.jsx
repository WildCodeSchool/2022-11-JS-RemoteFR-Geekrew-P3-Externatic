/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import expressAPI from "../services/expressAPI";

function OfferFilterForm({ setJobOffers }) {
  const [isModalOpen, setIsModalOpen] = useState(true); // Définir l'état pour le popup
  const [isActive, setIsActive] = useState(false);

  const [formData, setFormData] = useState({
    salary: [],
    contract: [],
    technologies: [],
    sectors: [],
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, checked } = e.target;
    setIsActive(true);
    if (checked === true) {
      setFormData((prev) => ({ ...prev, [name]: [...prev[name], value] }));
    } else {
      const newSelection = formData[name].filter((select) => select !== value);
      setFormData((prev) => ({ ...prev, [name]: newSelection }));
    }
  };

  const handlePopup = () => {
    setIsModalOpen(!isModalOpen);
  }; // Gérer l'état du popup

  useEffect(() => {
    if (formData.technologies.length) {
      expressAPI.get(`/job_offers`).then((res) => {
        setJobOffers(
          res.data.filter((offer) =>
            formData.technologies.some((techno) =>
              offer.technologies.includes(techno)
            )
          )
        );
      });
    } else if (formData.technologies.length === 0 && isActive) {
      expressAPI.get(`/job_offers`).then((res) => {
        setJobOffers(res.data);
      });
    }
  }, [formData]);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:justify-self-start md:items-start md:absolute md:overflow-y-hidden">
      <div className="absolute top-0 right-0 w-auto my-6 mx-auto max-w-sm md:left-0 md:my-0 md:mx-0 md:top-72 md:max-w-xs md:ml-8">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl text-black font-semibold">Filtres</h3>
            <button
              type="button"
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <h3 className="text-lg font-medium mb-2">Salaire</h3>
            <input
              type="range"
              id="salary"
              name="salary"
              min="25000"
              max="80000"
              value={formData.salary}
              onChange={handleChange}
              step="1000"
              list="tickmarks"
              className="block w-full bg-main p-1 rounded my-2 color-main"
            />
            <datalist id="tickmarks">
              <option value="30000">30 000 €</option>
              <option value="40000">40 000 €</option>
              <option value="50000">50 000 €</option>
              <option value="60000">60 000 €</option>
              <option value="70000">70 000 €</option>
              <option value="80000">80 000 €</option>
            </datalist>
            <span className="text-sm text-gray-700">
              {formData.salary} €/an
            </span>
            <h3 className="text-lg font-medium mb-2">Contrat</h3>
            <div className="flex flex-col">
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="contract"
                  value="CDI"
                  checked={formData.contract.includes("CDI")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">CDI</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="contract"
                  value="Stage"
                  checked={formData.contract.includes("Stage")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Stage</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="contract"
                  value="CDD"
                  checked={formData.contract.includes("CDD")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">CDD</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="contract"
                  value="Alternance"
                  checked={formData.contract.includes("Alternance")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Alternance</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="contract"
                  value="Freelance"
                  checked={formData.contract.includes("Freelance")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Freelance</span>
              </label>
            </div>
            <br />
            <h3 className="text-lg font-medium mb-2">Technologies</h3>
            <div className="flex flex-col">
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="technologies"
                  value="JavaScript"
                  checked={formData.technologies.includes("JavaScript")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Javascript</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="technologies"
                  value="Angular"
                  checked={formData.technologies.includes("Angular")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Angular</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="technologies"
                  value="React"
                  checked={formData.technologies.includes("React")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">ReactJS</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="technologies"
                  value="PHP"
                  checked={formData.technologies.includes("PHP")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">PHP</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="technologies"
                  value="Symphony"
                  checked={formData.technologies.includes("Symphony")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Symphony</span>
              </label>
            </div>
            <br />
            <h3 className="text-lg font-medium mb-2">Secteurs</h3>
            <div className="flex flex-col">
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="sectors"
                  value="Aéronautique"
                  checked={formData.sectors.includes("Aéronautique")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Aéronautique</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="sectors"
                  value="Santé"
                  checked={formData.sectors.includes("Santé")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Santé</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="sectors"
                  value="Agroalimentaire"
                  checked={formData.sectors.includes("Agroalimentaire")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Agroalimentaire</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="sectors"
                  value="Informatique"
                  checked={formData.sectors.includes("Informatique")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Informatique</span>
              </label>
              <label className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="sectors"
                  value="Banque/Assurance"
                  checked={formData.sectors.includes("Banque/Assurance")}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Banque/Assurance</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={handlePopup}
            >
              Annuler
            </button>
            <button
              className="bg-green-500 text-black active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Filtrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferFilterForm;
