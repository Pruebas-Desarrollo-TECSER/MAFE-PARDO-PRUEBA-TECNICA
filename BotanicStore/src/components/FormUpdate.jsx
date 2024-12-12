import { Button, Form } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsById, updateProducts } from "../redux/thunks/productsThunks";
import { useForm } from "../hoocks/useForm";
import FormFields from "./FormFields";

const FormUpdate = ({ id, onSubmit }) => {
    const dispatch = useDispatch();

    const { formData, errors, handleInputChange, validate, setFormData } = useForm({
        name: "",
        description: "",
        img: "",
        quantity: 0,
        idcategory: 0,
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const result = await dispatch(getProductsById(id));
                if (result && result.payload) {
                    const product = result.payload;
                    setFormData({
                        name: product.name,
                        description: product.description,
                        img: product.img,
                        quantity: product.quantity,
                        idcategory: product.category_idcategory,
                    });
                }
            } catch (error) {
                console.error("Error loading product:", error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id, dispatch, setFormData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const product = {
            name: formData.name,
            description: formData.description,
            img: formData.img,
            quantity: formData.quantity,
            category_idcategory: formData.idcategory,
        };

        try {
            const result = await dispatch(updateProducts({ id, product }));
            console.log("Product updated:", result);
            onSubmit?.(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="w-full space-y-4">
            <FormFields
                mode="update"
                product={formData}
                formData={formData} 
                errors={errors}
                onInputChange={handleInputChange}
            />
            <div className="flex gap-4">
                <Button className="w-full" color="success" type="submit">
                    Update Product
                </Button>
                <Button type="reset" variant="bordered">
                    Reset
                </Button>
            </div>
        </Form>
    );
};

export default FormUpdate;
