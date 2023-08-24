<template>
	<MenuList 
    title="Menu"
    :items="items"
    slide-variant="success"
    slide-wording="Select"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import MenuList from '@/components/MenuList.vue';

	export default defineComponent({
		components: {
			MenuList
		},
		data() {
			return { 
				items: [{name: 'menu1'}, {name: 'menu2'}]
			}
		},
	});
</script>
