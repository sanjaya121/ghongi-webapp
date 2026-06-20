import { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductsContext";



import './products.scss';

const Products = () => {

    const [query, seetQuery] = useState("");
    const prods = useContext(ProductContext) || [];

    const filtered = prods.filter((p: any) =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );


    return (
        console.log("Query", query),
        <div className="my-5">
            <div > <input name="search" onChange={(e) => seetQuery(e.target.value)} placeholder="Enter Search word " /></div>
            <div className="row">
                {filtered && filtered.map(prod => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <h6 className="title-ellipsis">{prod.title}</h6>
                        <img src={prod.images[0]} alt={prod.title} className="img-fluid" />
                    </div>
                ))}
            </div>

        </div>


    )
}

export default Products