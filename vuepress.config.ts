import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
	port: 3000,
	base: "/pulsar-docs/",
	title: "Pulsar Edit",
	locales: {
		"/": { lang: "en" },
		"/nl/": { lang: "nl" }
	},
	theme: defaultTheme({
		locales: {
			"/": {
				selectLanguageName: "English"
			},
			"/nl/": {
				selectLanguageName: "Nederlands"
			}
		}
	})
});
