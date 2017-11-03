<template>
	<div id="hello">{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'Hello',
	data() {
		return {
			message: 'Hello, Vue!'
		};
	}
});
</script>
