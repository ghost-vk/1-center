const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProduction = !isDev;

const devOptimization = {
    splitChunks: {
        chunks: 'all'
    }
}

const prodOptimization = {
    minimize: isProduction,
    minimizer: [
        new TerserPlugin()
    ],
}

const optimization = isProduction ? prodOptimization : devOptimization

const devRules = [
    {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader",
        ],
    },
]

const prodRules = [
    ...devRules,
    {
        test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    },
]

const rules = isProduction ? prodRules : devRules

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].js',
    },
    optimization: optimization,
    module: {
        rules: rules
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "styles.css"
        }),
    ],
};