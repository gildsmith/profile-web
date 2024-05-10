/*
 | ---------------------------------------------------------------------------
 | Default Router
 | ---------------------------------------------------------------------------
 | This module searches for custom routers in npm and composer packages,
 | as well as the default routing of this package, and merges them. Vendor
 | routes take precedence over default routes, allowing overrides.
 */

const customRoutesFile = import.meta.glob('@/gildsmith/profile/routes.js', {
    import: 'default',
    eager: true,
})

const composerRouteFiles = import.meta.glob('@composer/*/*/resources/js/gildsmith/profile/routes.{ts,js}', {
    import: 'default',
    eager: true,
})

const npmRouteFiles = import.meta.glob('@npm/*/*/src/gildsmith/profile/routes.{ts,js}', {
    import: 'default',
    eager: true,
})

const defaultRoutesFile = import.meta.glob('./routes.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(defaultRoutesFile).flat(),
    ...Object.values(composerRouteFiles).flat(),
    ...Object.values(npmRouteFiles).flat(),
    ...Object.values(customRoutesFile).flat(),
]