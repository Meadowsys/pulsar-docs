<template>
	<slot v-if="platform === 'macOS'" />
</template>

<script setup lang="ts">
	import { platform } from "./PlatformSwitcher.vue";
</script>
