<template>
	<slot v-if="platform === 'Windows'" />
</template>

<script setup lang="ts">
	import { platform } from "./PlatformSwitcher.vue";
</script>
