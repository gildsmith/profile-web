import {reactive} from 'vue'
import axios from 'axios'

interface FormState {
    state: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useRecoveryRequestForm() {
    const formData = reactive({
        email: '',
    })

    const formState = reactive<FormState>({
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