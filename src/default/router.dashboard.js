// noinspection JSUnresolvedReference

const vendorRouteFiles = import.meta.glob([
    '@composer/*/*/resources/js/profile/router.dashboard.{ts,js}',
    '@npm/*/*/resources/js/profile/router.dashboard.{ts,js}',
], {
    import: 'default',
    eager: true,
})

const defaultRouteFile = import.meta.glob('../router.dashboard.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(vendorRouteFiles).flat(),
    ...Object.values(defaultRouteFile).flat(),
]