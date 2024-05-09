/*
 | ---------------------------------------------------------------------------
 | Default Router
 | ---------------------------------------------------------------------------
 | This module searches for custom routers in npm and composer packages,
 | as well as the default routing of this package, and merges them. Vendor
 | routes take precedence over default routes, allowing overrides.
 */

const vendorRoutesFiles = import.meta.glob([
    '@composer/*/*/resources/js/profile/router.{ts,js}',
    '@npm/*/*/resources/js/profile/router.{ts,js}',
], {
    import: 'default',
    eager: true,
})

const defaultRoutesFile = import.meta.glob('./routes/routes.js', {
    import: 'default',
    eager: true,
})

export default [
    ...Object.values(defaultRoutesFile).flat(),
    ...Object.values(vendorRoutesFiles).flat(),
]