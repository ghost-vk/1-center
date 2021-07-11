const tailwindcss = require('tailwindcss')

const devPlugins = [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
]

const productionPlugins = [
    ...devPlugins,
    require('cssnano')({ preset: 'default' })
]

const plugins = process.env.NODE_ENV === 'production' ? productionPlugins : devPlugins

module.exports = {
    plugins: plugins
}