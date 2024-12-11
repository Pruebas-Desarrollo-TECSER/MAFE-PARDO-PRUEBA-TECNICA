import {Card, CardHeader, CardBody,CardFooter, Image, Button} from "@nextui-org/react";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

const ProductCard =({name, description, price, image, onAddToCart})=>{
    return (
        <Card isFooterBlurred className="border-none flex flex-col justify-center" radius="lg">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://nextui.org/images/hero-card.jpeg"
              width={200}
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center bg-white/10 border-white/20 border-[1px] py-2 rounded-lg shadow-small w-full z-10 gap-2">
            <AddProduct mode=""></AddProduct>
            <DeleteProduct></DeleteProduct>
          </CardFooter>
        </Card>
      );
}

export default ProductCard;