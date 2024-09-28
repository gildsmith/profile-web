import axios from 'axios'
import {reactive} from 'vue'

import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

/**
 * This composable provides basic components to create reactive forms that
 * allow authenticating users. It follows Laravel Sanctum documentation.
 *
 * @see https://laravel.com/docs/11.x/sanctum#csrf-protection
 */
export function useAuthenticateUser() {
    const formModel = reactive({
        email: '',
        password: '',
        remember: false,
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
        response: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('/api/authentication/login', formModel)
                .then((response) => handleFormSuccess(response, formState))
                .catch(error => catchFormError(error, formState))
        }).catch(error => catchFormError(error, formState))
    }

    return {formModel, formState, submitForm}
}