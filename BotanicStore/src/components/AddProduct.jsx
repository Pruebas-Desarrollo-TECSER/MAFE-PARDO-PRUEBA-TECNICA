import {Button} from "@nextui-org/react";
import {Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,useDisclosure,} from "@nextui-org/react";

import FormAdd from "./FormAdd";

const AddProduct = ({mode})=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        <>
         <Button onPress={onOpen} 
        color={mode==="add"?"success":"warning"}
        variant={mode ==="add"?"solid":"ghost"}
        radius={mode !== "add" ? "lg" : undefined}
        size={mode !== "add" ? "sm" : undefined}

        >
         {mode === "add" ? "Register Product" : "Update"} 
         </Button>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">
                    {mode === "add" ? "Register Product" : "Update Product"} 
                    </ModalHeader>
                    <ModalBody>
                        <FormAdd mode="add"></FormAdd>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddProduct;