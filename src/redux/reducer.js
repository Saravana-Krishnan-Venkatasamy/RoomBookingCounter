const initialState = {
  roomCount: 1,
  adultCount: 1,
  childCount: 0,
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ROOMCOUNT":
      newState = { ...newState, roomCount: action.value };
      console.log(action.value);
      break;
    case "ADULTCOUNT":
      newState = { ...newState, adultCount: action.value };
      break;
    case "CHILDCOUNT":
      newState = { ...newState, childCount: action.value };
      break;

    default:
      break;
  }
  return newState;
};
export default reducer;
