import {reactive} from 'vue'
import axios from 'axios'

export function useRecoveryCompletionForm() {
    const formData = reactive({
        token: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    async function submitForm() {
        axios.post('/api/authentication/recovery/' + formData.token, formData).then(response => {
            formState.response = response.data
        }).catch(() => {
            //
        })
    }

    return {formData, submitForm}
}