type formState = 'idle' | 'submitting' | 'success' | 'error'

interface FormStateInterface {
    state: formState;
    errors: Record<string, string[]>;
}

function catchFormError(error, formState) {
    formState.errors = error.response.data.errors || {common: ['Please try again later.']}
    formState.state = 'error'
}

export {formState, catchFormError, FormStateInterface}