export const roomIncrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (roomCount < 5) {
      roomCount = roomCount + 1;
      dispatch({ type: "ROOMCOUNT", value: roomCount });
      if (adultCount + childCount <= roomCount) {
        adultCount = adultCount + 1;
        dispatch({ type: "ADULTCOUNT", value: adultCount });
      }
    }
  };
};
export const roomDecrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (roomCount > 1) {
      if ((roomCount - 1) * 4 > childCount + adultCount) {
        roomCount = roomCount - 1;
        dispatch({ type: "ROOMCOUNT", value: roomCount });
      } else {
        let minusvalue = 0;
        minusvalue = childCount + adultCount - (roomCount - 1) * 4;
        if (childCount < minusvalue) {
          minusvalue = minusvalue - childCount;

          childCount = childCount = 0;
          dispatch({ type: "CHILDCOUNT", value: childCount });
          adultCount = adultCount - minusvalue;
          dispatch({ type: "ADULTCOUNT", value: adultCount });
        } else {
          childCount = childCount - minusvalue;
          dispatch({ type: "CHILDCOUNT", value: childCount });
        }
      }

      roomCount = roomCount - 1;
      dispatch({ type: "ROOMCOUNT", value: roomCount });
    }
  };
};
export const adultIncrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (adultCount + childCount < 20) {
      adultCount = adultCount + 1;
      if (adultCount + childCount > 4 * roomCount) {
        roomCount = roomCount + 1;
      }
    }
    dispatch({ type: "ADULTCOUNT", value: adultCount });
    dispatch({ type: "ROOMCOUNT", value: roomCount });
  };
};
export const adultDecrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (adultCount > 1) {
      adultCount = adultCount - 1;
      dispatch({ type: "ADULTCOUNT", value: adultCount });
      if (adultCount + childCount === roomCount) {
        roomCount = roomCount - 1;
        dispatch({ type: "ROOMCOUNT", value: roomCount });
        adultCount = adultCount - 1;
        dispatch({ type: "ADULTCOUNT", value: adultCount });
      }
    }
  };
};
export const childIncrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (adultCount + childCount < 20) {
      childCount = childCount + 1;
      if (adultCount + childCount >= 4 * roomCount) {
        roomCount = roomCount + 1;
      }
    }

    dispatch({ type: "ROOMCOUNT", value: roomCount });
    dispatch({ type: "CHILDCOUNT", value: childCount });
  };
};
export const childDecrement = (roomCount, adultCount, childCount) => {
  return (dispatch) => {
    if (childCount > 0) {
      childCount = childCount - 1;
      dispatch({ type: "CHILDCOUNT", value: childCount });

      if (childCount + adultCount === roomCount) {
        roomCount = roomCount - 1;
        childCount = childCount - 1;
        dispatch({ type: "ROOMCOUNT", value: roomCount });
        dispatch({ type: "CHILDCOUNT", value: childCount });
      }
    }
  };
};
