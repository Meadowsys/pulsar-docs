import { defineClientConfig } from "@vuepress/client";
import PlatformSwitcher from "../.components/PlatformSwitcher.vue";
import macOS from "../.components/macOS.vue";
import Linux from "../.components/Linux.vue";
import Windows from "../.components/Windows.vue";
import Unknown from "../.components/Unknown.vue";

export default defineClientConfig({
	enhance({ app }) {
		app.component("PlatformSwitcher", PlatformSwitcher);
		app.component("macOS", macOS);
		app.component("Linux", Linux);
		app.component("Windows", Windows);
		app.component("Unknown", Unknown);
	}
});
