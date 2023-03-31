/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import expressAPI from "../services/expressAPI";

function OfferFilterForm({ setJobOffers }) {
  const [isActive, setIsActive] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [fields, setFields] = useState([]);
  const [contracts, setContracts] = useState([]);

  const [formData, setFormData] = useState({
    salary: [],
    contract: [],
    technologies: [],
    fields: [],
  });

  const handleTechnology = (e) => {
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

  const handleContract = (e) => {
    e.preventDefault();
    const { name, id, checked } = e.target;
    const idNum = parseInt(id, 10);
    setIsActive(true);
    if (checked === true) {
      setFormData((prev) => ({ ...prev, [name]: [...prev[name], idNum] }));
    } else {
      const newSelection = formData[name].filter((select) => select !== idNum);
      setFormData((prev) => ({ ...prev, [name]: newSelection }));
    }
  };

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
    }
    if (formData.contract.length) {
      expressAPI.get(`/job_offers`).then((res) => {
        setJobOffers(
          res.data.filter((offer) =>
            formData.contract.includes(offer.contract_id)
          )
        );
      });
    }
    if (formData.fields.length) {
      expressAPI.get(`/job_offers`).then((res) => {
        setJobOffers(
          res.data.filter((offer) => formData.fields.includes(offer.field))
        );
      });
    } else if (
      formData.technologies.length === 0 &&
      formData.contract.length === 0 &&
      isActive
    ) {
      expressAPI.get(`/job_offers`).then((res) => {
        setJobOffers(res.data);
      });
    }
  }, [formData]);

  useEffect(() => {
    expressAPI.get("/technologies").then((res) => {
      setTechnologies(res.data);
    });

    expressAPI.get("/fields").then((res) => {
      setFields(res.data);
    });

    expressAPI.get("/contracts").then((res) => {
      setContracts(res.data);
    });
  }, []);

  return (
    <div className="border-0 relative flex flex-col ml-8 outline-none focus:outline-none">
      <div className="absolute md:static z-2 bg-white w-full shadow-lg rounded-lg mt-8 md:mt-0">
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-2xl text-black font-semibold">Filtres</h3>
        </div>
        <div className="relative p-6 flex-auto">
          <h3 className="text-lg font-medium mb-2">Contrat</h3>
          <div className="flex flex-col">
            {contracts.map((contract) => (
              <label
                key={contract.id}
                className="inline-flex items-center mt-2"
              >
                <input
                  type="checkbox"
                  name="contract"
                  id={contract.id}
                  value={contract.type}
                  checked={formData.contract.includes(contract.id)}
                  onChange={handleContract}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{contract.type}</span>
              </label>
            ))}
          </div>
          <br />
          <h3 className="text-lg font-medium mb-2">Technologies</h3>
          <div className="flex flex-col">
            {technologies.map((technology) => (
              <label
                key={technology.id}
                className="inline-flex items-center mt-2"
              >
                <input
                  type="checkbox"
                  name="technologies"
                  value={technology.name}
                  checked={formData.technologies.includes(technology.name)}
                  onChange={handleTechnology}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{technology.name}</span>
              </label>
            ))}
          </div>
          <br />
          <h3 className="text-lg font-medium mb-2">Secteur</h3>
          <div className="flex flex-col">
            {fields.map((field) => (
              <label key={field.id} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  name="fields"
                  value={field.name}
                  checked={formData.fields.includes(field.name)}
                  onChange={handleTechnology}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{field.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferFilterForm;
