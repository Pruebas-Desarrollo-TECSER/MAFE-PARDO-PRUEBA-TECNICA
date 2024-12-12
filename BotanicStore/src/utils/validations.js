export const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.description) errors.description = "Description is required";
    if (!formData.quantity) errors.quantity = "Quantity is required";
    if (!formData.idcategory) errors.category = "Category is required";
    return errors;
};