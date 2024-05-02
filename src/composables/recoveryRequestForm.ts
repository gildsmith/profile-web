import {reactive} from 'vue'
import axios from 'axios'

export function useRecoveryRequestForm() {
    const formData = reactive({
        email: '',
    })

    async function submitForm() {
        axios.post('/api/authentication/recovery', formData).then(response => {
            formState.response = response.data
        }).catch(() => {
            //
        })
    }

    return {formData, submitForm}
}