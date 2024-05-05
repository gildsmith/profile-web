import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface, catchFormError} from './contracts/formState'

export function useRegisterUser() {
    const formData = reactive({
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

        axios.post('/api/registration/register', formData).then(() => {
            formState.state = 'success'
        }).catch((error) => catchFormError(error, formState))
    }

    return {formData, formState, submitForm}
}