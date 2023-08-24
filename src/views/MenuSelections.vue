<template>
	<MenuList 
		title="Selections"
		:items="items"
		slide-variant="danger"
		slide-wording="Delete"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import MenuList from '@/components/MenuList.vue';

	export default defineComponent({
		components: {
			MenuList,
		},
		data() {
			return { 
				items: [{name: 'test'}, {name: 'test2'}]
			}
		},
	});
</script>
