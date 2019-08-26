import { combineReducers } from "redux";

const fetchImagesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_IMAGES_SUCCESS":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  images: fetchImagesReducer
});
