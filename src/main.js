
import { createApp } from 'vue'
import './assets/scss/main.scss';

import App from './App.vue'
/* import roboto slab font */
import "@fontsource/roboto-slab"; // Defaults to weight 400.

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarFull } from '@fortawesome/free-regular-svg-icons';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faStar, faStarFull, faTurnUp)
createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
