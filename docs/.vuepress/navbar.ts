import type { NavbarConfig } from "@vuepress/theme-default";
import { paths, children } from "./shared";

type Texts = {
	flight_manual: string;
	getting_started: {
		title: string;
	};
};

export const navbar_en = define_navbar({
	flight_manual: "Flight Manual",
	getting_started: {
		title: "Getting Started"
	}
});

function define_navbar(t: Texts): NavbarConfig {
	return [
		{
			text: t.flight_manual,
			children: [
				{
					text: t.getting_started.title,
					children: children(paths["atom-flight-manual"]["1-getting-started"])
				}
			]
		}
	];
}
