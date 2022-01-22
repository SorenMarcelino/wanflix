module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            }
        ],
    },
};