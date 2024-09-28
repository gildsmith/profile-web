import axios from 'axios'
import {reactive} from 'vue'

import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

/**
 * This composable provides basic components
 * to manage user stateful logout functionality.
 */
export function useLogoutUser() {
    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        axios.post('/api/authentication/logout')
            .then(response => handleFormSuccess(response, formState))
            .catch(error => catchFormError(error, formState))
    }

    return {formState, submitForm}
}