import {reactive} from 'vue'
import axios from 'axios'

interface FormData {
    email: string,
    password: string,
    remember: boolean,
}

interface FormState {
    status: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export function useAuthenticationForm() {
    const formData = reactive<FormData>({
        email: '',
        password: '',
    })

    const formState = reactive<FormState>({
        status: 'idle',
        errors: {},
        response: {},
    });

    async function submitForm() {
        formState.status = 'submitting'
        formState.errors = {}

        axios.get('/sanctum/csrf-cookie').then(() => {
            axios.post('/api/authentication/login', formData).then(response => {
                formState.status = 'success'
                formState.response = response.data
            }).catch((error) => {
                formState.status = 'error'
                formState.errors = error.response.data.errors || {common: ['Please try again later']}
            })
        }).catch((error) => {
            formState.status = 'error'
            formState.errors = error.response.data.errors || {common: ['Please try again later']}
        })
    }

    return {formData, formState, submitForm}
}