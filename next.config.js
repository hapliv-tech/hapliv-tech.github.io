// const { default: next } = require('next');
// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');
// const nextConfig = {
//     reactStrictMode: true,
//     images:{
//         domains:['images.unsplash.com']
//     }
// }


// module.exports = withPlugins([
//     [optimizedImages, {
//         optimizedImages: false
//       /* config for next-optimized-images */
//     }],
//     nextConfig
//     // your other plugins here
  
//   ]);


// Gets all of the blog posts

const servicesData = require('./src/services.json')
const getServicesEntries = async () => {
console.log(servicesData);
  return servicesData;
};

const nextConfig = {
    // https://github.com/vercel/next.js/issues/21079
    async exportPathMap() {
        const routes = {
          '/':{page:'/'},
          '/about-us':{page:'/about-us'},
          '/treatments': { page: '/treatments' },
          '/blogs':{page:'/blogs'},
          '/technology':{page:'/technology'},
          '/faqs':{page:'/faqs'},
          '/appointment':{page:'/appointment'},
          '/treatments/[treatments]': { page: '/treatments/[treatments]'} // Blog page, // Blog page
        };
        return routes;
      }
,
    images: {
      unoptimized:true,
      formats: ['image/webp'],
      domains:['images.unsplash.com']
    }
  };

module.exports = nextConfig