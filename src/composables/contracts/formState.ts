/*
 | ---------------------------------------------------------------------------
 | Form State Composables
 | ---------------------------------------------------------------------------
 | Provides a structured process of communication with the backend application
 | to which the frontend can react. Ensures that form states have uniform
 | names and offers a consistent way to handle form errors.
 */

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormStateInterface {
    state: FormState;
    errors: Record<string, string[]>;
    response: object;
}

function catchFormError(error, formState: FormStateInterface) {
    formState.response = {}
    formState.errors = error.response.data.errors || {common: ['Please try again later.']}
    formState.state = 'error'
}

function handleFormSuccess(response, formState: FormStateInterface) {
    formState.errors = {}
    formState.response = response || {}
    formState.state = 'success'
}

export {FormState, catchFormError, handleFormSuccess, FormStateInterface}