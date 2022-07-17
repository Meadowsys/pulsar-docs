import { defineClientConfig } from "@vuepress/client";
import PlatformSpecific from "./docs/.components/PlatformSpecific.vue";
import PlatformSwitcher from "./docs/.components/PlatformSwitcher.vue"

export default defineClientConfig({
	enhance({ app }) {
		app.component("PlatformSpecific", PlatformSpecific);
		app.component("PlatformSwitcher", PlatformSwitcher);
	}
});
