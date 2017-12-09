
const argv = {
    verbose:    _.includes(process.argv, '-v') || _.includes(process.argv, '--verbose'),
    json:       _.includes(process.argv, '--json'),
    production: _.includes(process.argv, '--production'),
};
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                "> 5%",            // https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0
                "last 2 versions", // http://caniuse.com/
            ]
        }),
        require('postcss-url-mapper')(function(url) {
            return argv.production ? url : url.replace(new RegExp('^/'), 'http://localhost:3000/');
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            JQuery: 'jquery'
        })
    ]
};