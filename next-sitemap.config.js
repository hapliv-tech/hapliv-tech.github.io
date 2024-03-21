var customLimitedField  = function(path){
  if(path.startsWith("/blogs/")) return true;
};
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://haplivdentalclinic.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // custom function to ignore the path

    // only create changefreq along with path
    // returning partial properties will result in generation of XML field with only returned values.
    if (customLimitedField(path)) {
      // This returns `path` & `changefreq`. Hence it will result in the generation of XML field with `path` and  `changefreq` properties only.
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: 'weekly',
        priority: 0.7
      }
    }

    // Use default transformation for all other cases
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: 'weekly',
      priority: 0.8,
    }
  },
}