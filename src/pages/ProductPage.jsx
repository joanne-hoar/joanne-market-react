import './ProductPage.css'
import ProductCard from '../components/ProductCard.jsx'

function ProductPage(){

    const allProducts = [
  {id: 1001, name: 'Cat', price: 100, description: 'A calm companion with a soft coat and a curious personality.', imageUrl: '/products/cat.png'},
  {id: 1002, name: 'Dog', price: 200, description: 'A loyal friend that brings energy, playfulness, and company to the home.', imageUrl: '/products/dog.png'},
  {id: 1003, name: 'Rabbit', price: 150, description: 'A gentle pet with quiet charm, long ears, and a love for cozy spaces.', imageUrl: '/products/rabbit.png'},
 ];

return(
    <div className="product-grid">
    {
        allProducts.map(product => (
            <ProductCard key={product.id} product={product} />
        ))
    }
    </div>
)
}

export default ProductPage;