import { Input, Select, SelectItem } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getCategories } from "../redux/thunks/categoriesThunks";

const FormFields = ({ formData, errors, onInputChange, mode, product }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await dispatch(getCategories());
            if (getCategories.fulfilled.match(result)) {
                const categories = result.payload;
                const dataFields = categories.map(category => ({
                    idcategory: category.idcategory,
                    name: category.name,
                }));
                setData(dataFields);
                console.log('Categories cargadas', dataFields);
            } else {
                console.error("Error fetching categories", result.error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            <Input
                isRequired
                errorMessage={errors.name}
                label="Name"
                name="name"
                placeholder={mode === "update" ? product.name : "Enter the name"}
                value={formData.name}
                onChange={onInputChange}
            />
            <Input
                isRequired
                errorMessage={errors.description}
                label="Description"
                name="description"
                placeholder={mode === "update" ? product.description : "Enter the description"}
                value={formData.description}
                onChange={onInputChange}
            />
            <Input
                label="Image"
                name="image"
                placeholder={mode === "update" ? product.img : "img.png"}
                value={formData.image}
                onChange={onInputChange}
                type="url"
            />
            <Input
                isRequired
                errorMessage={errors.quantity}
                label="Quantity"
                name="quantity"
                placeholder={mode === "update" ? product.quantity : "Enter the quantity"}
                value={formData.quantity}
                onChange={onInputChange}
                type="number"
            />
            <Select
                isRequired
                errorMessage={errors.idcategory}
                label="Category"
                name="idcategory"
                value={formData.idcategory}
                onChange={onInputChange}
            >
                {data.map((field) => (
                    <SelectItem
                    key={field.idcategory}
                    value={field.idcategory}
                    >
                        {field.name}
                    </SelectItem>
                ))}
            </Select>
        </>
    );
};

export default FormFields;
