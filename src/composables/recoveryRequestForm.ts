import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface} from './contracts/formState'

export function useRecoveryRequestForm() {
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
        }).catch(error => {
            formState.errors = error.response.data.errors || {common: ['Please try again later.']}
            formState.state = 'error'
        })
    }

    return {formData, formState, submitForm}
}