module.exports = {
  siteMetadata: {
    title: `Unifying The Blue Book`,
    siteUrl: "https://unifying.thebluebook.co.za",
    url: "https://unifying.thebluebook.co.za",
    description:
      "The fourth peace of The Blue Book trilogy.",
    image:
      "https://thebluebook.co.za/img/unifying_structure.jpg",
    twitterUsername: "@cryptowanderer",
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        hideDoubleBrackets: true,
        mdxOtherwiseConfigured: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
      },
    },
  ],
};
