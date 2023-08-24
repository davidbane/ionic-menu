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
                <ion-item-sliding v-for="item in items">
                    <ion-item>
                        <ion-label>{{ item.name }}</ion-label>
                    </ion-item>

                    <ion-item-options>
                        <ion-item-option :color="slideVariant">{{ slideWording }}</ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
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
            slideVariant: {
                type: String,
                required: true
            },
            slideWording: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
        },
        data() {return {}},
    });
  </script>
  