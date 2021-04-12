const initState = "All";
const selectedLanguage = (state = initState, action) => {
  switch (action.type) {
    case "SELECT_LANG":
      return (state = action.payload);
    default:
      return state;
  }
};
export default selectedLanguage;
