const candidateReducer = (state, action) => {
  switch (action.type) {
    case "HANDRE_INPUT":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};

export default candidateReducer;
