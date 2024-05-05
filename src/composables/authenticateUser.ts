import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface, catchFormError} from './contracts/formState'

export function useAuthenticateUser() {
    const formData = reactive({
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
            axios.post('/api/authentication/login', formData).then(response => {
                formState.response = response.data
                formState.state = 'success'
            }).catch((error) => catchFormError(error, formState))
        }).catch((error) => catchFormError(error, formState))
    }

    return {formData, formState, submitForm}
}