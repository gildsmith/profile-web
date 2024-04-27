import {reactive} from 'vue'
import axios from 'axios'

interface FormData {
    email: string,
    password: string,
}

interface FormState {
    status: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useRegistrationForm() {
    const formData = reactive<FormData>({
        email: '',
        password: '',
    })

    const formState = reactive<FormState>({
        status: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.status = 'submitting'
        formState.errors = {}

        axios.post('/api/registration/register', formData).then(() => {
            formState.status = 'success'
        }).catch((error) => {
            formState.status = 'error'
            formState.errors = error.response.data.errors || {common: ['Please try again later']}
        })
    }

    return {formData, formState, submitForm}
}