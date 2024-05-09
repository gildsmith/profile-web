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

const vendorRoutesFiles = import.meta.glob([
    '@composer/*/*/resources/js/profile/routes.{ts,js}',
    '@npm/*/*/resources/js/profile/routes.{ts,js}',
], {
    import: 'default',
    eager: true,
})

const defaultRoutesFile = import.meta.glob('./routes.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(defaultRoutesFile).flat(),
    ...Object.values(vendorRoutesFiles).flat(),
    ...Object.values(customRoutesFile).flat(),
]