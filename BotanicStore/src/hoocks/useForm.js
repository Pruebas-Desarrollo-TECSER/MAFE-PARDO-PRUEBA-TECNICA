import { useState } from "react";
import { validateForm } from "../utils/validations";

export const useForm = (initialData) => {
    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
             ...prev, 
            [name]: value, 
        }));
    };

    const validate = () => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return { formData, errors, handleInputChange, validate, setFormData };
};
