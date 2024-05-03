import {reactive} from 'vue'
import axios from 'axios'

interface FormData {
    email: string,
    password: string,
    remember: boolean,
}

interface FormState {
    state: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useAuthenticationForm() {
    const formData = reactive<FormData>({
        email: '',
        password: '',
    })

    const formState = reactive<FormState>({
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
            }).catch((error) => {
                formState.errors = error.response.data.errors || {common: ['Please try again later.']}
                formState.state = 'error'
            })
        }).catch((error) => {
            formState.errors = error.response.data.errors || {common: ['Please try again later.']}
            formState.state = 'error'
        })
    }

    return {formData, formState, submitForm}
}