/*
 | ---------------------------------------------------------------------------
 | Dashboard Router
 | ---------------------------------------------------------------------------
 | Similar to router.js, but searches specifically for child routes related
 | to the 'profile.dashboard' routes. This allows dynamically extending the
 | dashboard view.
 */

const customRoutesFile = import.meta.glob('@/gildsmith/profile/routes.dashboard.{ts,js}', {
    import: 'default',
    eager: true,
})

const composerRouteFiles = import.meta.glob('@composer/*/*/resources/js/gildsmith/profile/routes.dashboard.{ts,js}', {
    import: 'default',
    eager: true,
})

const npmRouteFiles = import.meta.glob('@npm/*/*/src/gildsmith/profile/routes.dashboard.{ts,js}', {
    import: 'default',
    eager: true,
})

const defaultRoutesFile = import.meta.glob('./routes.dashboard.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(defaultRoutesFile).flat(),
    ...Object.values(composerRouteFiles).flat(),
    ...Object.values(npmRouteFiles).flat(),
    ...Object.values(customRoutesFile).flat(),
]