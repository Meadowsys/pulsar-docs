// hey! its type checked :p

export const paths = {
	"atom-flight-manual": {
		"~": "/atom-flight-manual/",
		"1-getting-started": {
			"~": "/atom-flight-manual/1-getting-started/",
			"1-why-atom": "/atom-flight-manual/1-getting-started/1-why-atom",
			"2-installing-atom": "/atom-flight-manual/1-getting-started/2-installing-atom",
			"3-atom-basics": "/atom-flight-manual/1-getting-started/3-atom-basics",
			"4-summary": "/atom-flight-manual/1-getting-started/4-summary"
		}
	}
};

type PathThing = { [k in string]: string | PathThing };
export function children<T extends PathThing>(paths: T) {
	return Object.entries(paths)
		.filter(v => v[0] !== "~")
		.map(v => typeof v[1] === "string" ? v[1] : children(v[1]));
}
