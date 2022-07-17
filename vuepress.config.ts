import { defineUserConfig, defaultTheme } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

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
		shikiPlugin({ theme: "one-dark-pro" }),
		docsearchPlugin({
			appId: "GKVR1BYYSI",
			apiKey: "b0784104edc7fc3b010f69139b964a20",
			indexName: "pulsar"
			// todo dutch locale?
		})
	]
});
