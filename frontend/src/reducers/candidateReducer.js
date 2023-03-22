const candidateReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export { candidateReducer };
