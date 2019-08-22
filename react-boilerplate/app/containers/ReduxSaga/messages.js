/*
 * ReduxSaga Messages
 *
 * This contains all the text for the ReduxSaga container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ReduxSaga';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ReduxSaga container!',
  },
});
