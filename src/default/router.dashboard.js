/*
 | ---------------------------------------------------------------------------
 | Dashboard Router
 | ---------------------------------------------------------------------------
 | Similar to router.js, but searches specifically for child routes related
 | to the 'profile.dashboard' routes. This allows dynamically extending the
 | dashboard view.
 */

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