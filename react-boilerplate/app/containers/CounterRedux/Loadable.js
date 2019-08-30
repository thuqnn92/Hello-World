/**
 *
 * Asynchronously loads the component for CounterRedux
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
