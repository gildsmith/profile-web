import defaultApp from '../default/App.vue'

/*
 | ---------------------------------------------------------------------------
 | Boostrap App Root Component
 | ---------------------------------------------------------------------------
 | This bootstrap file is responsible for loading the root component of the
 | application. It prioritizes user-defined configurations by first searching
 | for a project-specific file. If no custom file is found, it falls back to
 | loading the default root component. This design ensures flexibility and
 | customization at the root level of the application.
 */

const discoverCustomApp = import.meta.glob('@/gildsmith/profile/App.vue', {
    import: 'default',
    eager: true,
})

const customApp = Object.values(discoverCustomApp)

export default customApp.length === 1
    ? customApp[0]
    : defaultApp
