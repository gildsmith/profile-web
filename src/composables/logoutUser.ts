import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface, catchFormError} from './contracts/formState'

export function useLogoutUser() {
    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        axios.post('/api/authentication/logout').then(() => {
            formState.state = 'success'
        }).catch((error) => catchFormError(error, formState))
    }

    return {formState, submitForm}
}