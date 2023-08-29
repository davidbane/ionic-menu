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

	export default defineComponent({
		components: {
			SlidingMenuList
		},
		data() {
			return { 
				items: [{name: 'menu1'}, {name: 'menu2'}]
			}
		},
	});
</script>
