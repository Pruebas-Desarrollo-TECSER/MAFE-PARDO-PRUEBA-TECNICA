import {Table,TableHeader,TableColumn,TableBody,TableRow,TableCell,getKeyValue,} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { getSales} from "../redux/thunks/salesThunks"
import { getSellers, getSellersById} from "../redux/thunks/sellersThunk"

const DataSales =()=>{
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await dispatch(getSales());
            if(getSales.fulfilled.match(result)){
                const sales = result.payload;
                const dataFields = sales.map(sale =>({
                    idSale : sale.idsale,
                    date : sale.datesale,
                    product_idProduct : sale.product_idproduct,
                    seller_idSeller : sale.seller_idseller
                }));
                setData(dataFields);
                console.log('Sales', dataFields);
            } else{
                console.error("Error fetching sales", result.error)
            }
        };
        fetchData();
    }, [dispatch]);

    const columns = [
        { key: "idSale", label: "ID SALE" },
        { key: "date", label: "DATE" },
        { key: "product_idProduct", label: "PRODUCT" },
        { key: "seller_idSeller", label: "SELLER" },
      ];
        
        const rows = data.map((sale)=>({
            key : sale.idSale,
            idSale : sale.idSale,
            date: sale.date,
            product_idProduct: sale.product_idProduct,
            seller_idSeller: sale.seller_idSeller
        }));
    return(
        <>
        <div className="flex flex-wrap gap-3 justify-center sm:flex-col md:justify-evenly md:flex-row lg:flex-row lg:justify-between p-20">

        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
            {(item) => (
                <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
            )}
            </TableBody>
        </Table>
        </div>
        </>
    )
}
export default DataSales;
