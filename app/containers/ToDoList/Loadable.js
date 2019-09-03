/**
 *
 * Asynchronously loads the component for ToDoList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
