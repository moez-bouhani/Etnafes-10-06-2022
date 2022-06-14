const path = require("path");
const axios = require('axios')
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        headless: true,
        // maxConcurrentRoutes: 20,
        maxConcurrentRoutes: 1,
        renderAfterDocumentEvent: 'render-event' ,
        captureAfterTime: 5000,
        timeout: 0,
        staticDir: path.resolve("dist"),
       routes: ["/", "/packs", "/hebergementlibre", "/artisans", "/allvilles", "/contact", "/resultatsHome"]
      //  routes: ["/"]
      //  routes: ["/", "/packs", "/hebergementlibre", "/artisans", "/allvilles", "/contact", "/resultatsHome", "/resultats"]
      })
    ]
  }
};
