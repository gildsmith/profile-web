import axios from 'axios'
import {reactive} from 'vue'
import {catchFormError, FormStateInterface, handleFormSuccess} from './contracts/formState'

/**
 * Composable for registering a new user. This composable provides
 * basic components to create a form for user registration.
 */
export function useRegisterUser() {
    const formModel = reactive({
        email: '',
        password: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/registration/register', formModel)
            .then(response => handleFormSuccess(response, formState))
            .catch(error => catchFormError(error, formState))
    }

    return {formModel, formState, submitForm}
}