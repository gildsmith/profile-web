import axios from 'axios'
import {reactive} from 'vue'

import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

/**
 * Composable for requesting a password recovery. This composable
 * provides basic components to create a form for requesting
 * a password recovery link via email.
 */
export function useRecoveryRequest() {
    const formModel = reactive({
        email: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.state = 'submitting'
        formState.errors = {}

        axios.post('/api/authentication/recovery', formModel)
            .then(response => handleFormSuccess(response, formState))
            .catch(error => catchFormError(error, formState))
    }

    return {formModel, formState, submitForm}
}