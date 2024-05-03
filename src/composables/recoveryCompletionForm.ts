import {reactive} from 'vue'
import axios from 'axios'

interface FormState {
    state: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useRecoveryCompletionForm() {
    const formData = reactive({
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const formState = reactive<FormState>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/authentication/recovery/' + formData.token, formData).then(response => {
            formState.response = response.data
            formState.state = 'success'
        }).catch(error => {
            formState.errors = error.response.data.errors || {common: ['Please try again later']}
            formState.state = 'error'
        })
    }

    return {formData, formState, submitForm}
}