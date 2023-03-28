/* eslint-disable react/button-has-type */
function CompanyDescription() {
  return (
    <div className="w-full mt-5">
      <div className="">
        <div className="w-full ">
          <div className="">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm text-left font-medium text-grey2 md:bg-background"
            >
              {" "}
            </label>
            <input
              type="text"
              id="base-input"
              name="siret"
              placeholder=" Entrez le titre de l’annonce... "
              className="bg-gray-50 mb-4 border text-gray-900 text-sm rounded  block w-full p-2.5 "
            />
            {/* {formErrors.siret && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.siret}</p>
        )} */}
          </div>
          <details className="mb-4">
            <summary className="font-semibold  bg-white rounded-md py-2 px-4">
              Entreprise
            </summary>
            <div className="bg-white mt-5">
              <div className="m-6 pb-6 pt-6">
                <div className="">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm text-left font-medium text-grey2 md:bg-background"
                  >
                    {" "}
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="siret"
                    placeholder="Nom de l'entreprise"
                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                  {/* {formErrors.siret && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.siret}</p>
        )} */}
                </div>
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
                    name="mail"
                    placeholder="Localisation du poste"
                    //   onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* {formErrors.mail && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.mail}</p>
        )} */}
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
                    name="phone"
                    //   onChange={(e) => handleInput(e)}
                    className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* {formErrors.phone && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.phone}</p>
        )} */}
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
                    name="number_of_employee"
                    placeholder="Salaire Min"
                    //   onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* {formErrors.number_of_employee && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.number_of_employee}
          </p>
        )} */}
                  <input
                    type="text"
                    id="base-input"
                    name="number_of_employee"
                    placeholder="Salaire Max"
                    //   onChange={(e) => handleInput(e)}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* {formErrors.number_of_employee && (
          <p className="text-sm text-red mb-4 mx-2">
            {formErrors.number_of_employee}
          </p>
        )} */}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Contrat
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choisir un contrat</option>
                    <option value="US">CDD</option>
                    <option value="CA">CDI</option>
                    <option value="FR">Freelance</option>
                    <option value="DE">Stage</option>
                    <option value="DE">Alternance</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="technologies"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Technologies
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Choisir technologies</option>
                    <option value="">Javascript</option>
                    <option value="">Java</option>
                    <option value="">React</option>
                    <option value="">PHP</option>
                    <option value="">Angular</option>
                    <option value="">Express</option>
                    <option value="">MySql</option>
                  </select>
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
