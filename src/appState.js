export default {
	helper: {
		urlApi: "https://api.github.com"
	},
	dataUi: {
		headerLeft: [
			{ isLinkRouter: true, content: "Projets", link: "projects" },
			{ isLinkRouter: true, content: "Experiences", link: "experiences" },
			{ isLinkRouter: false, content: "Twitter", link: "https://www.twitter.com/ltostee"},
			{ isLinkRouter: false, content: "lucas.tostee@gmail.com", link: "mailto:lucas.tostee@gmail.com"},
			{ isLinkRouter: false, content: "Actuellement à New-York" }
		],
		headerRight: {
			languageDefault: "Français",
			languages: [
				{isActive: true, langue: "Français"},
				{isActive: false, langue: "English"}
			],
			themeDark: true,
		}
	}
}
