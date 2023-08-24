<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item v-for="item in items">
        <ion-label>Basic Item</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return { 
        items: [{}, {}]
      }
    },
  });
</script>
