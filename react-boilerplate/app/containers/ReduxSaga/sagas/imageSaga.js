import { takeEvery, put, call } from "redux-saga/effects";
import unsplash from "../api/api";

function* fetchImages({ term }) {
  const response = yield call(unsplash.get, "/search/photos", {
    params: { query: term }
  });
  yield put({ type: "FETCH_IMAGES_SUCCESS", payload: response.data.results });
}

export default function* watchFetchImages() {
  yield takeEvery("FETCH_IMAGES", fetchImages);
}