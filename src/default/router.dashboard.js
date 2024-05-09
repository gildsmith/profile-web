/*
 | ---------------------------------------------------------------------------
 | Dashboard Router
 | ---------------------------------------------------------------------------
 | Similar to router.js, but searches specifically for child routes related
 | to the 'profile.dashboard' routes. This allows dynamically extending the
 | dashboard view.
 */

const customRoutesFiles = import.meta.glob('@/gildsmith/profile/router.dashboard.{ts,js}', {
    import: 'default',
    eager: true,
})

const vendorRoutesFiles = import.meta.glob([
    '@composer/*/*/resources/js/profile/router.dashboard.{ts,js}',
    '@npm/*/*/resources/js/profile/router.dashboard.{ts,js}',
], {
    import: 'default',
    eager: true,
})

const defaultRoutesFile = import.meta.glob('./routes/routes.dashboard.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(defaultRoutesFile).flat(),
    ...Object.values(vendorRoutesFiles).flat(),
    ...Object.values(customRoutesFiles).flat(),
]