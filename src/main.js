import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
/* import specific icons */
import { faUserSecret,faLocationDot,faBars,faCloud,faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faLocationDot,faBars,faCloud,faXmark,faGithub)

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
