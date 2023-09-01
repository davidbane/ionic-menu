<template>
	<ClickMenuList 
    title="Menu"
    :items="items"
	/>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import ClickMenuList from '@/components/ClickMenuList.vue';

	export default defineComponent({
		components: {
			ClickMenuList
		},
		data() {
			return { 
				items: [{name: 'category1'}, {name: 'category2'}]
			}
		},
	});
</script>
