/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home Count',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Calculator',
  },
  sagaredux: {
    id: `${scope}.sagaredux`,
    defaultMessage: 'Redux Saga',
  },
  todolist: {
    id: `${scope}.todolist`,
    defaultMessage: 'To Do List',
  },
});
