<template>
	<SlidingMenuList 
    title="Menu"
    :items="items"
    slide-variant="success"
    slide-wording="Select"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import SlidingMenuList from '@/components/SlidingMenuList.vue';
	import { toastController } from '@ionic/vue';

	export default defineComponent({
		components: {
			SlidingMenuList,
		},
		data() {
			return { 
				items: [{name: 'menu1'}, {name: 'menu2'}]
			}
		},
		async mounted() {
			const toast = await toastController.create({
          message: 'Slide items to quickly select.',
          duration: 3000,
          position: 'top',
					color: 'warning'
        });

			await toast.present();
		}
	});
</script>
