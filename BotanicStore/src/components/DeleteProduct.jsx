import {Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,Button,useDisclosure,useDraggable,Image} from "@nextui-org/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts,getProductsById, deleteProducts } from "../redux/thunks/productsThunks";


const DeleteProduct =({id})=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const targetRef = useRef(null);
    const {moveProps} = useDraggable({targetRef, isDisabled: !isOpen});

    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
                try {
                    const result = await dispatch(getProductsById(id));
                    if (result && result.payload) {
                        const product = result.payload;
                        setProduct(result.payload);
                        console.log("Product fetched:", result.payload);
                    }
                } catch (error) {
                    console.error("Error loading product:", error);
                }
            };
    
            if (id) {
                fetchProduct();
            }
        }, [id, dispatch]);
    const handleDelete = async () => {
        if (product && product.idproduct) {
            try {
                const idproduct = product.idproduct;
                console.log('idproduct:', idproduct);

                const result = await dispatch(deleteProducts(idproduct));
                console.log("Delete response:", result);
                await dispatch(getProducts());
                onOpenChange(false);  
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        } else {
            console.error("Product not found or invalid product ID.");
        }
    };
    
    return(
        <>
        <Button onPress={onOpen}
            className=" text-red-500"
            color="danger"
            radius="lg"
            size="sm"
            variant="ghost"
        >Delete
        </Button>
        <Modal ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader {...moveProps} className="flex flex-col gap-1">
                    Delete Product
                </ModalHeader>
                <ModalBody >
                    <div className="flex flex-col items-center">
                    <p className="p-3">
                    Are you sure you want to delete this product?
                    </p>
                    <Image
                        alt="Woman listing to music"
                        className="object-cover"
                        height={200}
                        src={product.img}
                        width={200}
                    />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                    </Button>
                    <Button color="default" onPress={handleDelete}>
                    Delete
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
        </>
    );
}
export default DeleteProduct;