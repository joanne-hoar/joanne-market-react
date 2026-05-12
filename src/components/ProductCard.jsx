import './ProductCard.css';

function ProductCard({product, onAction}){ 
    
    function onSelect(){
        onAction(product);
    }

    return (
<button type="button" className="product-card" onClick={onSelect}>
	<h3>{ product.name }</h3>
	<h4>${ product.price }</h4>
</button>
    )
}

export default ProductCard;