/* eslint-disable import/prefer-default-export */
const candidateReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return { ...state, [action.field]: action.payload };
    case "HANDLE_CHECKBOX":
      return { ...state, gender: action.payload };
    case "HANDLE_HARDSKILLS":
      return { ...state, hard_skills: action.payload };
    default:
      return state;
  }
};

export { candidateReducer };
