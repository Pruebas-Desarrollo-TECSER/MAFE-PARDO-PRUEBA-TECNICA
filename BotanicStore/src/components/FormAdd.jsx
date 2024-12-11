import { Button } from "@nextui-org/react";
import { Form, Input, Select, SelectItem } from "@nextui-org/react";
import { useState, useEffect } from "react";

const FormAdd = ({ initialData = {}, onSubmit, mode }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        quantity: "",
        category: "",
        ...initialData, 
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }

        onSubmit(formData); 
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.description) errors.description = "Description is required";
        if (!formData.quantity) errors.quantity = "Quantity is required";
        if (!formData.category) errors.category = "Category is required";
        return errors;
    };

    return (
        <Form
        className="w-full justify-center items-center w-full space-y-4"
        validationErrors={errors}
        onSubmit={handleSubmit}
        >
        <div className="flex flex-col gap-4 max-w-md">
            <Input
            isRequired
            errorMessage={errors.name}
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter the name"
            value={formData.name}
            onChange={handleInputChange}
            />

            <Input
            isRequired
            errorMessage={errors.description}
            label="Description"
            labelPlacement="outside"
            name="description"
            placeholder="Enter the description"
            type="text"
            value={formData.description}
            onChange={handleInputChange}
            />

            <Input
            label="Image"
            labelPlacement="outside"
            placeholder="img.png"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            type="url"
            />

            <Input
            isRequired
            errorMessage={errors.quantity}
            label="Quantity"
            labelPlacement="outside"
            name="quantity"
            placeholder="Enter the Quantity"
            type="number"
            value={formData.quantity}
            onChange={handleInputChange}
            />

            <Select
            isRequired
            errorMessage={errors.category}
            label="Category"
            labelPlacement="outside"
            name="category"
            value={formData.category}
            onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
            }
            >
            <SelectItem key="ar" value="ar">
                Argentina
            </SelectItem>
            <SelectItem key="us" value="us">
                United States
            </SelectItem>
            <SelectItem key="ca" value="ca">
                Canada
            </SelectItem>
            <SelectItem key="uk" value="uk">
                United Kingdom
            </SelectItem>
            <SelectItem key="au" value="au">
                Australia
            </SelectItem>
            </Select>

            <div className="flex gap-4">
            <Button className="w-full" color="success" type="submit">
                {mode === "add" ? "Add Product" : "Update Product"}
            </Button>
            <Button type="reset" variant="bordered">
                Reset
            </Button>
            </div>
        </div>
        </Form>
  );
};

export default FormAdd;
