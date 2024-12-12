import {Card, CardHeader, CardBody,CardFooter, Image, Button} from "@nextui-org/react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

const ProductCard =({index, name, description, image, quantity})=>{
    return (
        <Card isFooterBlurred className="border-none flex flex-col justify-center" radius="lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{name}</h4>
            <p className="text-tiny font-bold">{description}</p>
            <small className="text-default-500">{quantity} units</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src={image}
              width={200}
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center bg-white/10 border-white/20 border-[1px] py-2 rounded-lg shadow-small w-full z-10 gap-2">
            <AddProduct mode="update" productId={index} ></AddProduct>
            <DeleteProduct id={index}></DeleteProduct>
          </CardFooter>
        </Card>
      );
}

export default ProductCard;