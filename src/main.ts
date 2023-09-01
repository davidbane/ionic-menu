import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItemOptions,
  IonLabel,
  IonItemSliding,
  IonItem,
  IonItemOption,
  IonList,
  IonIcon,
} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
app.component('ion-header', IonHeader);
app.component('ion-toolbar', IonToolbar);
app.component('ion-title', IonTitle);
app.component('ion-item-options', IonItemOptions);
app.component('ion-label', IonLabel);
app.component('ion-item-sliding', IonItemSliding);
app.component('ion-item', IonItem);
app.component('ion-item-option', IonItemOption);
app.component('ion-list', IonList);
app.component('ion-icon', IonIcon,);
  
router.isReady().then(() => {
  app.mount('#app');
});
