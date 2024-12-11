import {Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,Button,useDisclosure,useDraggable,Image} from "@nextui-org/react";
import { useRef } from "react";

const DeleteProduct =({id})=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const targetRef = useRef(null);
    const {moveProps} = useDraggable({targetRef, isDisabled: !isOpen});
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
                        src="https://nextui.org/images/hero-card.jpeg"
                        width={200}
                    />
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                    </Button>
                    <Button color="default" onPress={onClose}>
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