const candidateReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return { ...state, [action.field]: action.payload };
    case "HANDLE_CHECKBOX":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

export { candidateReducer };
