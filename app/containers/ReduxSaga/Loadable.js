/**
 *
 * Asynchronously loads the component for ReduxSaga
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
