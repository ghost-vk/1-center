const path = require('path')

module.exports = {
    purge: [path.resolve(__dirname, './*.html')],
    darkMode: false,
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '3rem',
            },
        },
        extend: {
            minHeight: {
                '3/4': '75%'
            },
            zIndex: {
                '60': 60
            }
        },
    },
    variants: {
        extend: {
            blur: ['hover', 'group-hover'],
        },
    },
    plugins: [],
}
