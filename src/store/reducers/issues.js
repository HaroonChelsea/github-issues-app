const initState = {};
const repos = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ISSUES":
      state = {
        ...state,
        ["page_" + action.payload.pageNumber]: action.payload.resp,
      };
      return state;
    case "ADD_SINGLE_ISSUE":
      console.log(action.payload);
      state = {
        ...state,
        ["issue_" + action.payload.number]: action.payload,
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
