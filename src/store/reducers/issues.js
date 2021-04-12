const initState = {};
const repos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ISSUES":
      state = {
        ...state,
        ["page_" + action.payload.pageNumber]: action.payload.res,
      };
      return state;
    case "CLEAR_ISSUES":
      state = {};
      return state;
    default:
      return state;
  }
};
export default repos;
