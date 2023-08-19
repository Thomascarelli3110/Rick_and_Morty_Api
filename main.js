import { handleRouteChange } from './router/router.js'

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('load', handleRouteChange);
