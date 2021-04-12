const initState = {};
const repos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_REPOS":
      console.log();
      state = {
        ...state,
        [action.payload.selectedLanguage]: action.payload.res,
      };
      return state;
    default:
      return state;
  }
};
export default repos;
