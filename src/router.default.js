// noinspection JSUnresolvedReference

const vendorRouteFiles = import.meta.glob([
    '@composer/*/*/resources/js/auth/router.js',
    '@npm/*/*/resources/js/auth/router.js',
], {
    import: 'default',
    eager: true,
})

const defaultRouteFile = import.meta.glob('./router.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(vendorRouteFiles).flat(),
    ...Object.values(defaultRouteFile).flat(),
]