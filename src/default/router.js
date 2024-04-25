// noinspection JSUnresolvedReference

const vendorRouteFiles = import.meta.glob([
    '@composer/*/*/resources/js/profile/router.{ts,js}',
    '@npm/*/*/resources/js/profile/router.{ts,js}',
], {
    import: 'default',
    eager: true,
})

const defaultRouteFile = import.meta.glob('../router.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(vendorRouteFiles).flat(),
    ...Object.values(defaultRouteFile).flat(),
]