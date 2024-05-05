type formState = 'idle' | 'submitting' | 'success' | 'error'

interface FormStateInterface {
    state: 'idle' | 'submitting' | 'success' | 'error';
    errors: Record<string, string[]>;
}

export {formState, FormStateInterface}