import { useEffect, useState } from 'react';

const useValidation = (initialValue: string, rules: ValidateRules) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState<string | undefined>();

    const validate = (str: string) => {
        const { minLength, maxLength, required, custom } = rules;
        if (required && !str.length) {
            setError(required);
            return;
        }
        if (minLength?.value && str.length < minLength.value) {
            setError(minLength.message);
            return;
        }
        if (maxLength?.value && str.length > maxLength.value) {
            setError(maxLength.message);
            return;
        }
        if (custom && custom(str)) {
            setError('The number must contain 11 digits');
            return;
        }
        setError(undefined);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        validate(e.target.value);
    };

    useEffect(() => {
        validate(value);
    }, [value]);

    return { value, error, handleChange };
};
export default useValidation;
