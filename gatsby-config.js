module.exports = {
  siteMetadata: {
    siteUrl: "https://www.useplink.com",
    title: "Plink - Create payment links and send them to clients",
    description:
      "Easily create payment requests and send to your customers via e-mail, SMS or by cpy-pasting the link",
    image:
      "https://useplink.com/assets/images/frontpage/favicon/favicon-32x32.png",
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `plink`,
        short_name: `plink`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/assets/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Poppins`,
          `Rubik`,
          `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    }
  ],
}
