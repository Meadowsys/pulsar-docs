import { defineUserConfig, defaultTheme } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";

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
	}),
	plugins: [
		shikiPlugin({ theme: "one-dark-pro" })
	]
});
