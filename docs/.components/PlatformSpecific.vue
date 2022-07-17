<template>
	<template v-if="platform === 'macOS'">
		<slot name="macos" />
	</template>

	<template v-else-if="platform === 'Linux'">
		<slot name="linux" />
	</template>

	<template v-else-if="platform === 'Windows'">
		<slot name="windows" />
	</template>

	<template v-else>
		unexpected error in detecting the platform?
	</template>
</template>

<script setup lang="ts">
	import { platform } from "./PlatformSwitcher.vue";
</script>
