<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet :animated="true"></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          v-if="onMenuPage"
          tab="tab1" 
          href="/tabs/categories"
        >
          <ion-icon aria-hidden="true" :icon="returnUpBackOutline" />
          <ion-label>Back</ion-label>
        </ion-tab-button>
        
        <ion-tab-button 
          v-else
          tab="tab2" 
          href="/tabs/categories"
        >
          <ion-icon aria-hidden="true" :icon="list" />
          <ion-label>Menu</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/selections">
          <ion-icon aria-hidden="true" :icon="checkmarkOutline" />
          <ion-label>Selections</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { 
    IonTabBar, 
    IonTabButton, 
    IonTabs, 
    IonRouterOutlet 
  } from '@ionic/vue';

  import { 
    checkmarkOutline,
    list, 
    returnUpBackOutline
  } from 'ionicons/icons';

  export default defineComponent({
		components: {
      IonTabs,
      IonTabBar,
      IonTabButton,
      IonRouterOutlet
    },
		data() {
			return { 
				items: [{name: 'menu1'}, {name: 'menu2'}]
			}
		},
    setup() {
      return { list, checkmarkOutline, returnUpBackOutline };
    },
    computed: {
      onMenuPage() {
        return this.$route.name === 'menu';
      }
    }
	});
</script>
