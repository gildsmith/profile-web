import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface} from './contracts/formState'

export function useLogoutForm() {
    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        axios.post('/api/authentication/logout').then(() => {
            formState.state = 'success'
        }).catch((error) => {
            formState.errors = error.response.data.errors || {common: ['Please try again later.']}
            formState.state = 'error'
        })
    }

    return {formState, submitForm}
}