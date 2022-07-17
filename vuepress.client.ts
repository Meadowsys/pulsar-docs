import { defineClientConfig } from "@vuepress/client";
import PlatformSwitcher from "./docs/.components/PlatformSwitcher.vue"

export default defineClientConfig({
	enhance({ app }) {
		app.component("PlatformSwitcher", PlatformSwitcher);
	}
});
