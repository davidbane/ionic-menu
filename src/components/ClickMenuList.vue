<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ title }}</ion-title>
          </ion-toolbar>
        </ion-header>
          
        <ion-list>
          <RouterLink
            v-for="item in items" 
            class="router-link"
            :to="{name: 'menu'}"
          >
            <ion-item 
              href="#"
            >
              <ion-label>{{ item.name }}</ion-label>
            </ion-item>
          </RouterLink>
        </ion-list>
      </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      items: {
        type: Array,
        default: () => ([])
      },
      title: {
        type: String,
        required: true
      },
    },
    data() {return {}},
  });
</script>

<style lang="sass" scoped>
  .router-link
    text-decoration: none !important
</style>
  