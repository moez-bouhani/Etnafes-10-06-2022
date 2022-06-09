const webpack = require('webpack')

const API_URL = {
    // production: JSON.stringify('https://www.project.com/api/endpoint.php'),
    development: JSON.stringify('https://etnafes.com/sendsms.php')
}

// check environment mode
const environment =
    process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    productionSourceMap: false,
    devServer: {
        // proxy: 'https://etnafesapi20212018.etnafes.com/',
        // https: true,
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                API_URL: API_URL[environment]
            })
        ]
    }
}