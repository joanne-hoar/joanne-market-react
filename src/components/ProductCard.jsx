import './ProductCard.css';

function ProductCard({product, onAction, isSelected}){ 
    
    function onSelect(){
        onAction(product);
    }

    return (
<button type="button" className={`product-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
	<h3>{ product.name }</h3>
	<h4>${ product.price }</h4>
</button>
    )
}

export default ProductCard;