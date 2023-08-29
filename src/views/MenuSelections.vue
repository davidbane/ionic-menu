<template>
	<SlidingMenuList 
    title="Selections"
    :items="items"
    slide-variant="danger"
    slide-wording="Delete"
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
				items: [{name: 'test'}, {name: 'test2'}]
			}
		},
		async mounted() {
			const toast = await toastController.create({
          message: 'Slide items to remove from selections.',
          duration: 3000,
          position: 'top',
					color: 'warning'
        });

			await toast.present();
		}
	});
</script>
