import './ProductPage.css'
import ProductCard from '../components/ProductCard.jsx'
import ProductService from '../common/ProductService.js';

function ProductPage(){
    const allProducts = ProductService.getAllProducts();

    function displaySelected(product){
        alert(product.name);
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