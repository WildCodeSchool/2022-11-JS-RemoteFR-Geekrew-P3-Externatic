function CompanyJobDescription() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="">
          <div className="w-full">
            <details className="mb-4">
              <summary className="font-semibold  bg-white rounded-md py-2 px-4">
                Description du poste
              </summary>
              <div className="bg-white mt-5 ">
                <div className="m-6 pb-6 pt-6">
                  <span>
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-left font-medium text-black"
                      >
                        {" "}
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        name="description"
                        //   onChange={(e) => handleInput(e)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
                        placeholder="Décrivez-nous ce poste"
                      />
                      {/* {formErrors.description && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
        )} */}
                    </div>
                    <label
                      htmlFor="base-input"
                      className="block mb-2 text-sm text-left font-medium text-black mt-4"
                    >
                      Expérience
                    </label>
                    <input
                      type="text"
                      id="base-input"
                      name="location"
                      // onChange={(e) => handleInput(e)}
                      className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
                    />
                    {/* {formErrors.location && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.location}</p>
      )} */}
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm text-left font-medium text-black"
                    >
                      Les missions
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      name="description"
                      // onChange={(e) => handleInput(e)}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
                      placeholder="Décrivez-nous les missions pour ce poste"
                    />
                    {/* {formErrors.description && (
        <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
      )} */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-left font-medium text-black mt-4"
                      >
                        Déroulement des entretiens
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        name="description"
                        //   onChange={(e) => handleInput(e)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2"
                        placeholder="Décrivez-nous le déroulement des entretiens"
                      />
                      {/* {formErrors.description && (
          <p className="text-sm text-red mb-4 mx-2">{formErrors.description}</p>
        )} */}
                    </div>
                  </span>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyJobDescription;
