import axios from 'axios'

/*
 | ---------------------------------------------------------------------------
 | Default Axios Configuration
 | ---------------------------------------------------------------------------
 | This bootstrap file sets up Axios with default configurations tailored for
 | Laravel applications. It pre-configures settings that align with common
 | Laravel backend requirements, ensuring seamless integration and optimized
 | performance for HTTP requests within the Laravel ecosystem.
 */

window.axios = axios
window.axios.defaults.withCredentials = true
window.axios.defaults.withXSRFToken = true
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'