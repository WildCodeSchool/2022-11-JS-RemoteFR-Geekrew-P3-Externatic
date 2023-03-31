/* eslint-disable import/prefer-default-export */
const offerReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return { ...state, [action.field]: action.payload };
    case "HANDLE_CONTRACT":
      return { ...state, contract: action.payload };
    case "HANDLE_TECHNOLOGY":
      return { ...state, technologies: action.payload };
    case "HANDLE_COMPANYID":
      return { ...state, companyId: action.payload };
    default:
      return state;
  }
};

export { offerReducer };
