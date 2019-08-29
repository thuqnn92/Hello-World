/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/Caculator';
import App from './component/NewReduxCaculator';
const store = createStore(reducer);
export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <Provider store={store}>
          <App />
        </Provider>
      </H1>
    </div>
  );
}
