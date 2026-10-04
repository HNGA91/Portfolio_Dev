const imageModules = import.meta.glob("../assets/images/*/*.{jpg,jpeg,png}", {
	eager: true,
	import: "default",
}) as Record<string, string>;

export const getProjectImages = (folder: string): string[] => {
	return Object.entries(imageModules)
		.filter(([path]) => path.includes(`/images/${folder}/`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, url]) => url);
};
