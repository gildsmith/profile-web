import axios from 'axios'
import {reactive} from 'vue'

import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

/**
 * Composable for completing a password recovery process. This
 * composable provides basic components to create a form for
 * resetting user's password with token-email pair.
 */
export function useRecoveryCompletion() {
    const formModel = reactive({
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
        response: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/authentication/recovery/' + formModel.token, formModel)
            .then(response => handleFormSuccess(response, formState))
            .catch(error => catchFormError(error, formState))
    }

    return {formModel, formState, submitForm}
}