import axios from 'axios'
import {reactive} from 'vue'

import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

export function useChangePassword() {
    const formModel = reactive({
        password: '',
        new_password: '',
        new_password_confirmation: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
        response: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/authentication/password', formModel)
            .then(response => handleFormSuccess(response, formState))
            .catch(error => catchFormError(error, formState))
    }

    return {formModel, formState, submitForm}
}