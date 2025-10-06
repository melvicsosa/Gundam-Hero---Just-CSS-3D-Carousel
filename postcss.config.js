export default {
    plugins: {
        'postcss-nesting': {},
        'postcss-preset-env': {
            stage: 1,
            features: { 'nesting-rules': false }
        },
        autoprefixer: {}
    }
}
