module.exports = {
  siteMetadata: {
    title: `Amber Jansen's Portfolio`,
    description: `My portfolio, showing a description about me, displaying my work and a way of contacting me`,
    author: `Amber Jansen`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.8, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`, `Raleway`,
          `Nunito\:300,400,400i,900` // you can also specify font weights and styles
        ],
        display: 'block'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
