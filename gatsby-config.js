module.exports = {
	siteMetadata: {
		title: `Kathleen Dalida Profile`,
		firstname: `Kathleen`,
		lastname: `Dalida`,
		job: `Graphic Designer`,
		about: `Hello, Welcome to my profile. I wanna share you some little things about
		me. Technically I’m a degree holder of Bachelor of Science in Information
		Technology. I may not be a graduate of any multimedia arts or other
		graphic design courses but I could say that I have my thinking and creating
		skills in designing, like matketing materials such as posters, banners, logos,
		business cards and flyers. I also design website mock-ups (website UI)
		and website banners. I really love what I do and what I’am doing and  I’ll
		more love the chance to appreciate my works by all of you.`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
