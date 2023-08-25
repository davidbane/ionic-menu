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

	export default defineComponent({
		components: {
			SlidingMenuList,
		},
		data() {
			return { 
				items: [{name: 'test'}, {name: 'test2'}]
			}
		},
	});
</script>
