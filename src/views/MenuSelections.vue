<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Selections</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Selections</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-list>
        <ion-item-sliding v-for="item in items">
          <ion-item>
            <ion-label>Sliding Item with End Options</ion-label>
          </ion-item>

          <ion-item-options>
            <ion-item-option color="danger">Delete</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
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
