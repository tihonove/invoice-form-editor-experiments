module.exports = {
    entry: {
        'index': ['regenerator/runtime', './index.js']
    },
    output: {
        path: 'dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(c|le)ss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|gif|png)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },

            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: /retail-ui/
            },
            {
                test: /\.(c|le)ss$/,
                include: /retail-ui/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf|gif|png)$/,
                include: /retail-ui/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'local_modules', 'web_modules', 'workspace'],
        extensions: ['', '.js', '.jsx']
    }
};