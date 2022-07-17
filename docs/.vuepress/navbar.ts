import type { NavbarConfig } from "@vuepress/theme-default";

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
					children: [
						flight_manual("/1-getting-started/1-why-atom"),
						flight_manual("/1-getting-started/2-installing-atom"),
						flight_manual("/1-getting-started/3-atom-basics"),
						flight_manual("/1-getting-started/4-summary")
					]
				}
			]
		}
	];
}

function flight_manual(str: string) {
	return `/atom-flight-manual${str}`;
}
