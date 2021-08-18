module.exports = {
  siteMetadata: {
    siteUrl: "https://chodzasluchy.ml",
    title: "Chodza Sluchy Website",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "google-tracking-id",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: [
        {
          name: "images",
          path: "./src/images/",
        },
        {
          name: "articles",
          path: "./content/articles"
        },
        {
          name: "article-images",
          path: "./content/images"
        },
        {
          name: "public",
          path: "./content/public"
        }
      ],
      __key: "images",
    },
  ],
};
