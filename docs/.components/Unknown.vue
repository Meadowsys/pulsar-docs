<template>
	<slot v-if="platform === 'unknown'" />
</template>

<script setup lang="ts">
	import { platform } from "./PlatformSwitcher.vue";
</script>
