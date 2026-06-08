import { useContext } from "react";
import { ProductContext } from "../../../context/productsContext";


const Products = () => {

    const prods = useContext(ProductContext);

    return (
        console.log("Products context",prods),

        <>

            <h1> Products</h1>
        </>
    )
}

export default Products