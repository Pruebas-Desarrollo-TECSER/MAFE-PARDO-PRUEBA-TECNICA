import { Button, Form, useDisclosure } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { getProducts,addProducts, updateProducts } from "../redux/thunks/productsThunks";
import { useForm } from "../hoocks/useForm";
import FormFields from "./FormFields";

const FormAdd = ({ initialData = {}, onSubmit, mode, id }) => {
    const dispatch = useDispatch();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    const { formData, errors, handleInputChange, validate } = useForm({
        name: "",
        description: "",
        img: "",
        quantity: 0,
        idcategory: 0,
        ...initialData,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const product = {
            "name": formData.name, 
            "description": formData.description,
            "img": formData.image,
            "quantity": formData.quantity ? parseInt(formData.quantity, 10) : 0,
            "category_idcategory": formData.idcategory ? parseInt(formData.idcategory, 10) : 0,
        };

        try {
            
            const result = await dispatch(addProducts(product)); 
            console.log("Product added:", result);
            await dispatch(getProducts());  
            onSubmit?.(result); 
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="w-full space-y-4">
            <FormFields
                formData={formData}
                errors={errors}
                onInputChange={handleInputChange}
            />
            <div className="flex gap-4">
                <Button className="w-full" color="success" type="submit">
                    {mode === "add" ? "Add Product" : "Update Product"}
                </Button>
                <Button type="reset" variant="bordered">
                    Reset
                </Button>
            </div>
        </Form>
    );
};

export default FormAdd;
