<!-- based off of NavbarDropdown.vue from @vuepress/theme-default -->

<script lang="ts">
	const platforms = [
		{ text: "macOS" },
		{ text: "Linux" },
		{ text: "Windows"}
	] as const;

	type KnownPlatform = typeof platforms[number]["text"];
	type Platform = KnownPlatform | "unknown";

	export const platform = ref<Platform>("unknown");

	// initially detect platform (can be set by user later)
	const ua = navigator.userAgent;
	if (ua.indexOf("Mac") !== -1) platform.value = "macOS";
	else if (ua.indexOf("Linux") !== -1) platform.value = "Linux";
	else if (ua.indexOf("Win") !== -1) platform.value = "Windows";

	function switch_platform(_platform: KnownPlatform) {
		platform.value = _platform;
	}
</script>

<script setup lang="ts">
	// most if not all of the stuff in this script setup
	// is copied over from NavbarDropdown.vue
	import DropdownTransition from "@vuepress/theme-default/lib/client/components/DropdownTransition.vue";
	import { ref, watch } from "vue";
	import { useRoute } from "vue-router";

	const open = ref(false)
	const route = useRoute()
	watch(
		() => route.path,
		() => {
			open.value = false
		}
	)

	/**
	 * Open the dropdown when user tab and click from keyboard.
	 *
	 * Use event.detail to detect tab and click from keyboard.
	 * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
	 */
	const handleDropdown = (e): void => {
		const isTriggerByTab = e.detail === 0
		if (isTriggerByTab) {
			open.value = !open.value
		} else {
			open.value = false
		}
	}
</script>

<template>
	<div class="navbar-dropdown-wrapper" :class="{ open }">
		<button
			class="navbar-dropdown-title"
			type="button"
			aria-label="platform"
			@click="handleDropdown"
		>
			<span class="title">Platform: {{ platform }}</span>
			<span class="arrow down" />
		</button>

		<button
			class="navbar-dropdown-title-mobile"
			type="button"
			aria-label="platform"
			@click="open = !open"
		>
			<span class="title">Platform: {{ platform }}</span>
			<span class="arrow" :class="open ? 'down' : 'right'" />
		</button>

		<DropdownTransition>
			<ul v-show="open" class="navbar-dropdown">
				<li
					v-for="child in platforms"
					:key="child.text"
					class="navbar-dropdown-item"
				>
					<a
						:class="{ 'router-link-active': child.text === platform }"
						@click="switch_platform(child.text)"
					>
						{{ child.text }}
					</a>
				</li>
			</ul>
		</DropdownTransition>
	</div>
</template>
