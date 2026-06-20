
import { useContext, useEffect, useState } from 'react';
import './cssgrid.scss';
import { ProductContext } from '../../../context/ProductsContext';


const CssGrid = () => {

    const products = useContext(ProductContext);
    const categories = products.map(p => p.category);



    return (
        console.log("categories ", categories),
        <>

            <div className="grid-container">
                {categories && categories.map(category => (
                    <img className="grid-tiem" src={category.image} height={400} width={500} />
                ))}


            </div>


        </>
    )
}

export default CssGrid;