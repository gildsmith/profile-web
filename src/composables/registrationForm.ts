import {reactive} from 'vue'
import axios from 'axios'

interface FormData {
    email: string,
    password: string,
}

interface FormState {
    state: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useRegistrationForm() {
    const formData = reactive<FormData>({
        email: '',
        password: '',
    })

    const formState = reactive<FormState>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.state = 'submitting'
        formState.errors = {}

        axios.post('/api/registration/register', formData).then(() => {
            formState.state = 'success'
        }).catch((error) => {
            formState.state = 'error'
            formState.errors = error.response.data.errors || {common: ['Please try again later']}
        })
    }

    return {formData, formState, submitForm}
}