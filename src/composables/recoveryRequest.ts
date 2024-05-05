import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface, catchFormError} from './contracts/formState'

export function useRecoveryRequest() {
    const formData = reactive({
        email: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.state = 'submitting'
        formState.errors = {}

        axios.post('/api/authentication/recovery', formData).then(() => {
            formState.state = 'success'
        }).catch((error) => catchFormError(error, formState))
    }

    return {formData, formState, submitForm}
}