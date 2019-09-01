/**
 *
 * Asynchronously loads the component for CalculatorPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
