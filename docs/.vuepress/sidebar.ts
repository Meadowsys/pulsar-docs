import type { SidebarConfig } from "@vuepress/theme-default";
import { paths, children } from "./shared";

type Texts = {
	getting_started: string;
};

export const sidebar_en = define_sidebar({
	getting_started: "Getting Started"
});

function define_sidebar(t: Texts): SidebarConfig {
	return {
		"/atom-flight-manual/1-getting-started/": [
			{
				text: t.getting_started,
				children: children(paths["atom-flight-manual"]["1-getting-started"])
			}
		]
	};
}
