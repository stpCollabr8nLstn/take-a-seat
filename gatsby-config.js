module.exports = {
    siteMetadata: {
        title: "Take A Seat",
        description: "Take a seat by clicking on an open seat",
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}