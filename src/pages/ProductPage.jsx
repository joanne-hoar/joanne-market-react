import './ProductPage.css'
import ProductCard from '../components/ProductCard.jsx'
import ProductService from '../common/ProductService.js';
import { useState, useEffect } from 'react';

function ProductPage(){
    //const allProducts = ProductService.getAllProducts();
    const [allProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ProductService.getAllProducts()
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
    }, []); // Empty dependency array - run once on mount

    function displaySelected(product){
        alert(product.name);
    }

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div className="product-grid">
        {
            allProducts.map(product => (
                <ProductCard key={product.id} product={product} onAction={displaySelected}/>
            ))
        }
        </div>
    )
}

export default ProductPage;