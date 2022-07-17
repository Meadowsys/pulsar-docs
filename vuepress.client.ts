import { defineClientConfig } from "@vuepress/client";
import PlatformSwitcher from "./docs/.components/PlatformSwitcher.vue";
import macOS from "./docs/.components/macOS.vue";
import Linux from "./docs/.components/Linux.vue";
import Windows from "./docs/.components/Windows.vue";
import Unknown from "./docs/.components/Unknown.vue";

export default defineClientConfig({
	enhance({ app }) {
		app.component("PlatformSwitcher", PlatformSwitcher);
		app.component("macOS", macOS);
		app.component("Linux", Linux);
		app.component("Windows", Windows);
		app.component("Unknown", Unknown);
	}
});
