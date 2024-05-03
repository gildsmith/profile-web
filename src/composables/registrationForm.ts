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
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/registration/register', formData).then(() => {
            formState.state = 'success'
        }).catch((error) => {
            formState.errors = error.response.data.errors || {common: ['Please try again later.']}
            formState.state = 'error'
        })
    }

    return {formData, formState, submitForm}
}