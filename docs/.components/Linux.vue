<template>
	<slot v-if="platform === 'Linux'" />
</template>

<script setup lang="ts">
	import { platform } from "./PlatformSwitcher.vue";
</script>
