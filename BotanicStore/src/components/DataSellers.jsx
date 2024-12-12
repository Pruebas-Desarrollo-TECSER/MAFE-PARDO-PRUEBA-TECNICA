import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { getSellers } from "../redux/thunks/sellersThunk";
import { EditIcon } from "../../public/EditIcon";
import { DeleteIcon } from "../../public/DeleteIcon";


const DataSeller = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(getSellers());
      if (getSellers.fulfilled.match(result)) {
        const sellers = result.payload;
        const dataFields = sellers.map(seller => ({
          idSeller: seller.idseller,
          firstName: seller.firstname,
          lastName: seller.lastname,
          email: seller.email,
          address: seller.address,
          image: seller.image,
          birthDate: seller.birthdate,
          gender_idGender: seller.gender_idgender
        }));
        setData(dataFields);
        console.log('Sellers', dataFields);
      } else {
        console.error("Error fetching sellers", result.error);
      }
    };
    fetchData();
  }, [dispatch]);

  const columns = [
    { key: "firstName", label: "NAME" },
    { key: "lastName", label: "LAST NAME" },
    { key: "email", label: "EMAIL" },
    { key: "address", label: "ADDRESS" },
    { key: "image", label: "PROFILE" },
    { key: "birthDate", label: "BIRTH DATE" },
    { key: "gender_idGender", label: "GENDER" }
  ];

  const users = data.map(seller => ({
    key: seller.idSeller,
    firstName: seller.firstName,
    lastName: seller.lastName,
    email: seller.email,
    address: seller.address,
    image: seller.image,
    birthDate: seller.birthDate,
    gender_idGender: seller.gender_idGender
  }));

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "firstName":
      case "lastName":
        return cellValue;
      case "email":
      case "address":
        return cellValue;
      case "image":
        return (
          <img src={cellValue} alt="Profile" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        );
      case "birthDate":
        return cellValue;
      case "gender_idGender":
        return cellValue === 1 ? "Male" : "Female";  // Ajusta según cómo se manejen los géneros en tu base de datos
      case "actions":
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:flex-col md:justify-evenly md:flex-row lg:flex-row lg:justify-between p-20">
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          {columns.map(column => (
            <TableColumn key={column.key} align={column.key === "actions" ? "center" : "start"}>
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.key}>
              {columns.map((column) => (
                <TableCell key={column.key}>{renderCell(item, column.key)}</TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataSeller;
