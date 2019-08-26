/*
 *
 * ReduxSaga actions
 *
 */



export const fetchImages = term => {
  return { type: "FETCH_IMAGES", term };
};
