/*
 * ToDoList Messages
 *
 * This contains all the text for the ToDoList container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ToDoList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ToDoList container!',
  },
});
