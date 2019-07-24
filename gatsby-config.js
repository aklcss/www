module.exports = {
    siteMetadata: {
        title: `Auckland CSS website`,
        description: `Website for Auckland CSS`,
        author: `Nathan SD`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Auckland CSS`,
                short_name: `aklcss`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Fira Sans`,
                        variants: [`400`, `900`]
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-meetup`,
            options: {
                // Learn about environment variables: https://gatsby.app/env-vars
                // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
                // key: process.env.MEETUP_API_KEY,
                key: `66401d62251493415a4d116ae7e7e`,
                // key: `qo29l0b68chgg3ps404eoelqpr`,
                // Mandatory: the URL name of a Meetup Group.
                // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
                groupUrlName: "auckland-css",
                // Optional parameters for retrieving Events, see full documentation at
                // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
                status: "upcoming,past",
                desc: "true",
                page: 10,
                sign: "true",
                photo_host: "public",
                fields: "featured_photo"
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
