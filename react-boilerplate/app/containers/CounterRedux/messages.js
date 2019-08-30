/*
 * CounterRedux Messages
 *
 * This contains all the text for the CounterRedux container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CounterRedux';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CounterRedux container!',
  },
});
